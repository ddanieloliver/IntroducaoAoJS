// hoisting significa içar, ou seja, isso significa que as declarações vão subir para o topo do escopo.
//A declaração sobe mas a atribuição permanece no mesmo lugar.
console.log('a = ', a);
var a = 2;
console.log('a = ', a);


//ISSO É O MESMO QUÊ:
/*var a --> Isso aqui aparecerá como undefined
console.log ('a = ', a);
a = 2; --> isso aqui deixou de ser uma declaração (var a = 2) e passou a ser uma atribuição (a = 2);
console.log ('a = ', a);*/

//No JS as variáveis declaradas com var são "empurradas para cima" pelo próprio progama; Esse efeito de "içamento" não ocorre com o let.

function getValor() {
    function retornarValor() { // isso é uma declaração
        return 1;
    }
    return retornarValor();
    function retornarValor() { // isso é uma declaração
        return 2;
    }
}
var resultado = getValor();
console.log(resultado);
// O que vai acontecer aqui é:
/*
function getValor () {
    function retornarValor () { // isso é uma declaração
        return 1;
    }
    function retornarValor () { // isso é uma declaração
        return 2;
    }          --> aqui a declaração subiu e o retur desceu.(hoisting)
    return retornarValor ();
}
var resultado = getValor();
console.log(resultado);*/
function getvalor() {
    var retornarValor = function () {
        return 1;
    }
    return retornarValor();
    var retornarValor = function () {
        return 2;
    }
}
var resultado = getvalor()
console.log(resultado);
// Nesse caso o que vai aontecer

function getvalor() {
  /*1 para ca */ var retornarvalor = undefined;
    /*2 - vira isso*/var retornarvalor = undefined
 /* 1 isso sobe --> var */ retornarvalor = function () {
        return 1;
    }
    return retornarvalor();
/* 2 -isso sobe -> var*/ retornarvalor = function () {
        return 2;
    }
}
var resultado = getvalor()
console.log(resultado);
