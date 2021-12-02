//novo recurso do ES2015 em que permite desestruturação
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 312,
    }
}

const {nome, idade} = pessoa // isso significa que eu estou tirando nome e idade de dentro de pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep);
// cuidado para não tentar acessar um recuso que não existe por exemplo:
// const{conta{ag: n:}} isso vai dar erro;