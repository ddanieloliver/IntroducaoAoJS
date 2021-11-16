const escola = "Cod3r";
console.log(escola.charAt(4)); //Significa que ele vai me dar a letra que está no índice 4 do string, começando do 0.
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)) /* esse comando mostra o valor do terceiro indice do string e  com base na tabela unicode, por exemplo: 
o terceiro indice d string é 3, indo para a tabela unicode, 3 tem como código 51.*/
console.log(escola.indexOf ('3')) //A partir do índice, eu descubro o valor do indice;
console.log(escola.substring(1)) //vai passar pelo indice 1, pelo 2, pelo 3, mas não vai pelo 0.
console.log(escola.substring(0,3)) //vai passar pelo 0, pelo 1, pelo 2, mas não vai incluir o 3.

console.log('Escola '.concat(escola.concat("!")));// concatenar
console.log(escola.replace(3, 'e')) // pegou o 3 idice e substituiu pelo 'e'
console.log('Ana,Maria,Pedro'.split(',')) // propriedade usada para quebrar um string em um arrey
