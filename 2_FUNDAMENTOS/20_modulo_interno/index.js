const meuModulo = require('./meu_modulo.js')  // Atribuir uma variavél para importar o modulo.
const soma = meuModulo.somar  // Atribuir a variavel soma a função somar do modulo.  // Não é necessario incluir parenteses pois não irei executar a fução, apenas atribui-la a variavel.

soma(1,2)
soma(3,4)
soma(5,6)
soma(7,8)
soma(9,10)

/*Podemos utilizar a notação sem atribuir a variavel*/
console.log('')
meuModulo.somar(1,2)
meuModulo.somar(3,4)
meuModulo.somar(5,6)
meuModulo.somar(7,8)
meuModulo.somar(9,10)

