// operadores aritiméticos são binários, ou seja, trabalham em cima de 2 operandos;
const[a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2 // Isso é muito utilizado para saber se o numero é impar ou par. É executada uma divisão e olha-se o resto, se for igual a 0, é par, se for igual a 1, é impar.

console.log(soma,  subtracao, -divisao, multiplicacao, modulo)