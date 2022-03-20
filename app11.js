//dado un texto  una busqueda censuarr todas las concidencias en
// la bsuqeda den el texto censurado con la palabra [-censurado-]

//si el texto y la busqyeda estan vacis mostrar no puedes ller la buscque

//

//funciones qu werecien parametros opcionales
function censurado(texto=false, busqeuda=false) {
    
    let resultado = "";
    if(!texto && !busqeuda){//si text oy busqueda dal FALSE
        resultado="no pudes leer el texto"
    }else if ( !texto &&busqeuda){
        resultado = "No puedes hacer la busqueda"
    }else if (texto && !busqeuda){
        resultado = " no puedses leer la busqueda"
    }
    
return resultado;
}
console.log(censurado('asdf','asdf'))