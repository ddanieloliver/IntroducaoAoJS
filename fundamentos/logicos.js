function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // esse || representa o opreador logico do tipo ou.
    const comprarTv50 = trabalho1 && trabalho2 // o && representa uma operaçao do tipo e.
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // esse ^representa a operacao bitwise (bit a bit) tambem conhecido como ou exclusivo, xor.
    //Mas vamois fazer de outra forma--|
    const comprarTv32 = trabalho1 != trabalho2; // isso significa que se um for true, o outro será false, já que são diferentes. o mesmo casoé se os dois forem iguais, logo, retornará false, ao inves de true. 
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //Novo recurso do ES2015 que permite evidenciar objetos de forma a escrever somente a chave
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))