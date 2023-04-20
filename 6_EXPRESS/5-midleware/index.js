const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const pathBase = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next) {
  req.authStatus = true

  if(req.authStatus) {
    console.log('Usuário está logado. Pode continuar!');
    next()
  } else {
    console.log('Usuário não está logado. Faça o login novamente para continuar!');
    next()
  }
}

app.use(checkAuth)

app.get('/', (req, res) => {
  res.sendFile(`${pathBase}/index.html`)
})

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`)
})