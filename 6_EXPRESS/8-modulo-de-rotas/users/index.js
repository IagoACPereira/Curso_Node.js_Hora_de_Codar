const express = require('express')
const router = express.Router()

const pathBase = path.join(__dirname, 'templates')


router.get('/users/add', (req, res) => {
  res.sendFile(`${pathBase}/userform.html`)
})

router.post('/users/save', (req, res) => {
  console.log(req.body)

  const name = req.body.name
  const age = req.body.age

  console.log(`O nome do usuário é ${name} e possui ${age} anos de idade.`);

  res.sendFile(`${pathBase}/userform.html`)
})

router.get('/users/:id', (req, res) => {
  const id = req.params.id

  // Aqui fariamos uma leitura da tabela users, resgatando os dados de um usuário no banco de dados.
  console.log(`Estamos procurando pelo usuario: ${id}`);

  res.sendFile(`${pathBase}/users.html`)
})

module.exports = router