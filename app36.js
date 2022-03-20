// dado un texto devolcver las consonantes y vocales
//
//recorrer cada letra
// testear conpexprecioens regulares
 function cuentaLetras(texto) {
     let consonantes =0;
     let vocales = 0;
     let texto_limpio = "";

     texto_limpio = texto
                    .split("")
                    .filter(letra => /[aeiou\w]/gi.test(letra)&& isNaN(letra))
     //filter() no funciona sobre texto STRING funciona sobre ARRARYS
                    .join("");

     for( let letra of texto_limpio){
         if (/[aeiou]/gi.test(letra)){
             vocales++;
         }else{
             consonantes++;
         }
     }
     return[consonantes, vocales]
 }

 console.log(
 cuentaLetras("sdf fsd jhfco i ieowir f eeeee")
     
 )