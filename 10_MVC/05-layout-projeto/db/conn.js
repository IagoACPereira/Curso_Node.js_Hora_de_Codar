const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try { 
    sequelize.authenticate()
    console.log(`Sucesso ao conectar ao MySQL!`);
} catch (error) {
    console.log(`Falha ao conectar ao MySQL: ${error}`);
}

module.exports = sequelize