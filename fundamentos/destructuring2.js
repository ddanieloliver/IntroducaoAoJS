// Nesse exemplos vamos fazer tirar determinado dado dentro de um array
//a sintaxe do destructuring usa o mesmo token, no caso do array [] portanto, devo me atentar à estrutura.

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log (n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // nota refere-se ao indice 2.
console.log(nota) // isso significa que tirei o nota = 6 de dentro do array;