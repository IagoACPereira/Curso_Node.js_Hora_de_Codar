// 1 - intalação handlebars
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/',(req, res) => {
    // 3 - dados para view
    const user = {
        name: 'Iago',
        surname: 'Azevedo Costa Pereira',
        age: 26
    }

    const palavra = 'Teste'

    // 2 - layouts
    res.render('home', {user: user, palavra})
})

app.listen(3000, () => {
    console.log('App funcionando!!')
})
