const prod1 = {} // um par de chaves é uma forma literal de denominar um objeto, assim como [] denominaria um array
prod1.nome = 'Celular ultra mega' //um objeto no js é uma combinação de chave-valor. sendo prod1 a chave, coom muitos valores.
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaco

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo', //colocar as caracteristicas com virgula no final.
    preco: 79.90,
}
console.log(prod2)
// '{"nome": "Camisa Polo", "preco:" 79.98 }'  isso é um json. Não é objeto