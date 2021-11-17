let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(isAtivo); /* para transformar um valor qualquer em booleano,
                     ou seja, verdadeiro ou falso, eu uso a  estrutura de negação "!"*/
//ex:
console.log(!isAtivo); // não isAtivo, ou seja, false.
console.log(!!isAtivo); // não não isAtivo, ou seja, true.

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos...');
console.log(!!0);
console.log(!!'');// está sem espaço
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('para finalizar...');
console.log(!!('' || null || 0 || '' || 123)) //nesse caso, irá retornar o primeiro valor true que o computador encontrar.
//ex:
let nome = ''
console.log(nome || 'Desconhecido') // nome = '' retorna false, logo, 'Desconhecido', por ser true vai ser mostrado;
//agora:
nome = 'Fernando'
console.log(nome || 'Desconhecido') //Fernando será mostrado.