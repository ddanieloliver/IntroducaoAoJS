let num1 = 1;
let num2 = 2;

num1++ // isso acrescenta uma unidade ao valor da variavel
console.log(num1);
--num1 // isso remove uma unidade do valor da variável, além disso, --num1 tem prioridade para ser lido, logo, será lido antes do num1++
console.log(num1);

console.log(++num1 === num2--) // ATANÇÃO! Esse caso dará true, porque o -- só vai ser lido após a interpretação da igualdade
//Tanto é que:
console.log(num1 === num2) // isso agora dará false
//PORTANTO: evite colocar incremento dentro de uma comparação.
