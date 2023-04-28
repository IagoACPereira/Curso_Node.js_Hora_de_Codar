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