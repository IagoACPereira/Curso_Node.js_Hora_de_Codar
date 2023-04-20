const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const pathBase = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
  res.sendFile(`${pathBase}/index.html`)
})

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`)
})