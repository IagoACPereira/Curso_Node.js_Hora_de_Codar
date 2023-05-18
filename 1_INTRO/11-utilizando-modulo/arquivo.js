const fs = require('fs') // require File System

fs.readFile('arquivo-apoio.txt', ('utf8'), (err, data) => {  // readFile('<caminho do arquivo>', ('utf8'), <função para apresentar erro ou arquivo>)
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})