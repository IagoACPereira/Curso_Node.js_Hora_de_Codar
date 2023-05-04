const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')

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

app.get('/user/edit/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({ raw: true, where: { id: id } })

    res.render('useredit', { user })
})

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id

    await User.destroy({ where: { id: id } })

    res.redirect('/')
})

app.get('/user/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({ raw: true, where: { id:id } })  // Recuperando apenas um dado;

    res.render('userview', { user })
})

app.post('/users/create', async (req, res) => {
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


conn.sync().then(() => {

    app.listen(port, () => { 
        console.log('Servidor rodando ok!');
    })

}).catch((err) => {

    console.log(err);

})