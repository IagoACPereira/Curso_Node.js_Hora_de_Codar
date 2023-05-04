const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodeSequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
}) 

try {
    console.log(`Conectamos com sucesso ao Sequelize.`)
} catch(err) {
    console.log(`Não foi possível conectar ao MySql, Erro: ${err}`)
}

module.exports = sequelize