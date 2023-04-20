const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const userRoutes = require('./users')

// Ler o body

app.use(express.urlencoded({
  extended:true,
}))

app.use(express.json())

const pathBase = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
  res.sendFile(`${pathBase}/index.html`)
})

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`)
})