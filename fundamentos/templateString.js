const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
            /* |-> OBS: No template não usar aspas simples, e sim o simbolo da crase (back tick)*/
const template = ` 
    Olá
    ${nome}!`
console.log(concatenacao, template)
// expressoes..
console.log(`1 + 1 = ${1 + 1}`)
// funcoes
const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`);