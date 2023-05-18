// exibir informaçoes da tabela

const fileSystem = require('fs')  // require('fs')<<--- instrução padrão para recuperação de arquivos.

fileSystem.readFile('BaseClientes.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})