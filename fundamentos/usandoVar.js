/*a variável var, diferente do let, torna-se visivel para todo mundo mesmo estando fora do bloco. Exceto no caso da função,
 pois o escopo da function so é visível dentro dela.*/
{
    { 
        {
             { var sera = 'Será???' 
                console.log(sera)
            }
         } 
     } 
}
console.log(sera)
//Escopo é o local aonde a variável é visivel. Até onde ela é acessivel;

function teste () {
    let local = 123
    console.log(local);
}

teste ()
// console.log(local) -- Não consegue porque var local só é visto dentro da function
