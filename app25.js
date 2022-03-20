// dado un string Ponerlo completo en mayúsculas o minúsculas, 
// dependiendo de si hay más mayúsculas o minúsculas por defecto en el string
// 
// si hay mas elmentos en mayuscula todo en MAYUS
// si hay mas elementos en minusculass poner todo en MINUSCULAS
//

// 1.-crear dos contadores para MAYUSCULAS Y MINUSCULAS
// reccorer los textos y comprobar si si las letras son mayusculas
// AUMENTAR CONTADOES
// convertir a mayuscula  o m;iunscuka devo;lver resultado
// 

function convertir(texto) {
    let mayus = 0
    let minus = 0
    let resultado = "";

    //funcion .test() evalua exprecions regulares
    for(let letra of texto){
        if(/[A-Z]/.test(letra)){
            mayus++
        }else{
            minus++

        }

        }
        if(mayus === minus){
            console.log("son iguales")
        }else if(mayus>minus){
            resultado = texto.toUpperCase();
        }else {
            resultado = texto.toLowerCase();
        }
        console.log(mayus,minus)
        return resultado;
}
console.log(
convertir("asdfgGGGASDF")
    
)