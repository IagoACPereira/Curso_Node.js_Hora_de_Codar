const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const pathBase = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {
  const id = req.params.id

  // Aqui fariamos uma leitura da tabela users, resgatando os dados de um usuário no banco de dados.
  console.log(`Estamos procurando pelo usuario: ${id}`);

  res.sendFile(`${pathBase}/users.html`)
})

app.get('/', (req, res) => {
  res.sendFile(`${pathBase}/index.html`)
})

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`)
})