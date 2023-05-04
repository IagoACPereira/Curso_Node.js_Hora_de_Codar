const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')
const Address = require('./models/Address')

const app = express()
const port = 3000

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

/*  ROTAS  */

app.post('/address/delete', async (req, res) => {
    const UserId = req.body.UserId
    const id = req.body.id

    await Address.destroy({ where: { id: id } })

    res.redirect(`/user/edit/${UserId}`)
})

app.post('/address/create', (req, res) => {
    const address = {
        UserId: req.body.UserId,
        street: req.body.street,
        number: req.body.number,
        city: req.body.city,
    }

    Address.create(address)

    res.redirect(`/user/edit/${address.UserId}`)
})

app.post('/user/update', async (req, res) => {
    
    const userData = {
        id: req.body.id,
        name: req.body.name,
        occupation: req.body.occupation,
        newsletter: req.body.newsletter,
    }

    if(userData.newsletter === 'on') {
        userData.newsletter = true
    } else {
        userData.newsletter = false
    }

    await User.update(userData, { where: { id: userData.id } })

    res.redirect('/')
})

app.get('/user/edit/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({ include: Address, where: { id: id } })

    res.render('useredit', { user: user.get({ plain:true }) }) 
})

app.post('/user/delete/:id', async (req, res) => {
    const id = req.params.id

    await User.destroy({ where: { id: id } })

    res.redirect('/')
})

app.get('/user/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({ raw: true, where: { id:id } })  // Recuperando apenas um dado;

    res.render('userview', { user })
})

app.post('/user/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter
    
    if(newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }
    
    await User.create({ name, occupation, newsletter }) 
    
    res.redirect('/')
})

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.get('/', async (req, res) => {

    const users = await User.findAll({raw: true}) // recuperando todos os registros da tabela

    console.log(users);
    
    res.render('home', { users })
})

/* /ROTAS/ */


conn
.sync()
//.sync( { force: true } )  //Refaz toda a configuração do banco de dados, fazendo com que todos os registros seam apagados.
.then(() => {

    app.listen(port, () => { 
        console.log('Servidor rodando ok!');
    })

}).catch((err) => {

    console.log(err);

})