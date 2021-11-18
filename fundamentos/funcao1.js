//Funcao sem retorno   |-->//(a,b) são os parametros que eu quero ter dentro da minha função.
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3)
imprimirSoma(2) //soma de a + undefined = NaN
imprimirSoma(2, 10, 5, 6, 9) //vai pegar os dois valores primeiros e ignorar o resto.
imprimirSoma()

//Funcao com retorno  
            // |-->se não for definido b, ele será 1.
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2 ))
console.log(soma()) //somará 1 com undefined = NaN

/*OBS: O conceito de função: é uma recita de bolo. Ela delimita um bloco que contem todas as sentenças de codigo
que serão executadas. Ou seja, ela é um bloco de código nomeado, com varias sentenças {}. FUNÇÃO É A COISA MAIS IMPORTANTE
DENTRO DO JS.
*/