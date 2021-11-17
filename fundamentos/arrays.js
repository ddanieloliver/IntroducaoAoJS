const valores = [7.7, 8.9, 6.3, 9.2] // Obs: Não misturar dados dentro do array.
console.log(valores[0], valores[3]) // o numero entre [] se refere ao indice
console.log(valores[4]) // não existe um indice 4, logo, retornará undefined

valores[4] = 10 /* aqui eu posso colocar qualquer valor de indice. mas se por exemplo eu colocar [10],
               me retornarar 6 itens vazios entre 9.2 e 10*/
console.log(valores)
console.log(valores.length)//mostra quantos valores tem no array.

valores.push({id: 3}, false, null, 'teste') //adiciona novos elementos no arrary;
console.log(valores);

console.log(valores.pop()) //remove o ultimo elemento do array.
delete valores [0] // remove o elemento do indice mencionado.
console.log(valores)

console.log(typeof valores); // um array é um objeto;