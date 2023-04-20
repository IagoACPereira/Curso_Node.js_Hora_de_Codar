const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect(function(err) {
    if(err) {
        console.log(err)
    } else {

        console.log('Conectou ao MySQL');    
    
        app.listen(port, () => { 
            console.log('Servidor rodando ok!');
        })

    }
})