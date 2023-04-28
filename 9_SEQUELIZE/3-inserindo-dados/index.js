const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')
const sequelize = require('./db/conn')

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

app.get('/users/create', function(req, res) {
    res.render('adduser')
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

app.get('/', (req, res) => {
    res.render('home')
})

/* /ROTAS/ */


conn.sync().then(() => {

    app.listen(port, () => { 
        console.log('Servidor rodando ok!');
    })

}).catch((err) => {

    console.log(err);

})