const { Sequelize } = require('sequelize')
const chalk = require('chalk')

const sequelize = new Sequelize('nodeSequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
}) 

try {
    sequelize.authenticate()
    console.log(`Conectamos com sucesso ao Sequelize.`)
} catch(err) {
    console.log(`Não foi possível conectar ao MySql, Erro: ${err}`)
}

module.exports = sequelize