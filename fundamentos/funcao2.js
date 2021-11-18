//Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
} 

console.log(soma(2,3))

//retorno implicito
const subtracao = (a, b) => a - b //só funciona quando há uma única linha de código -- isso é uma arrow function
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) // a seta atua como se fosse function
imprimir2('Legal!!!')