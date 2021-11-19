var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero) 
//o let tem um escopo a mais, o escopo de bloco. Além do de função, e global. Já o var tem escopo global e de função somente.
//o let tem prioridade de ser visto dentro do bloco; Se não hover nenhuma variável dentro do bloco, ele vai dar priorida à primeira mais externa.
//diferente do var que pode ser visto globalmente.