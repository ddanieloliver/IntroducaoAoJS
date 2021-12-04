function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {     //Devo utilizar esse recurso em códigos que tenha, possibilidades de gerar erros.
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }

}

const obj = {nome: 'Roberto'} // se eu colocar name, não gerará erro.
imprimirNomeGritado(obj)


//try é um bloco de código que dentro dele coloca-se um código que eu jogo ter algum tipo de erro.
// associado ao bloco try, eu colococo um bloco do tipo catch, porque uma vez que gerou alguma exceção dentro de qualquer sentença de código, automaticamente o erro cai dentro do catch
// e dentro do catch, eu faço o tratamento do erro, como por exemplo mostrar uma mensagem para o usuário.
// assim eu crio uma função como a :
/* function tratarErroELancar(erro){
    //throw new Error('...') */
// finally é um bloco que será chamado sempre, mesmo que exista erro ou não.