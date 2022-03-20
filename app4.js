//dado una cadena de texto invertir el orden solo usar estrucrturas de control

// 
//crear un avariable para guardar ;a cadena invertida 
//bucle para recorrer el strign y guardar los caracterees en la variable
//

function invertir(texto) {
    
    let invertido = "";



    // letra = invertido REVIERTE
    // invertido + letra MANTIENE IGUAL

    for(let letra of texto){
       invertido =  letra + invertido

    }
   return invertido;
}

console.log( invertir("victor robles"))

const text = "a";
let inv = "p" + text;
console.log(inv)



//metodo II    
 const cadena = "MasterEnLógica"
     
const inversor = (cadena) => {
    let array = "";
    for(let i = cadena.length - 1 ; i >= 0 ; i--){
        array = array + cadena[i];
    }
    return "Palabra original: "+cadena+" Palabra invertida: "+array+".";
}
 
console.log(inversor(cadena));