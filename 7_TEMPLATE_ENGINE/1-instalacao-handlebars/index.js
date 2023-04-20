// 1 - intalação handlebars
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/',(req, res) => {
    res.render('home', {layout: false})  // Segundo pararametro existe equanto não temos a view
})

app.listen(3000, () => {
    console.log('App funcionando!!')
})
