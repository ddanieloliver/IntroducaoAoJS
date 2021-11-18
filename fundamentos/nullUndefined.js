let valor // não inicializada
console.log(valor)

valor = null; //ausência de valor; Essa variável aponta para nada.
console.log(valor);  //evitar fazer usi do undefined, praticar usar mais o null.
// console.log(valor.toString()) --> Não pode ser atribuido a uma variável null // Vai dar ERRO

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)