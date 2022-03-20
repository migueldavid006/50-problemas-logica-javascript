// dado un acadena et texto comprobar s e palindromo o no
// no tener en cuanto espacios simbolor raros
// la funcion devolvera true/false

// funcion con paranetro texto
// separar el texto en un array de letras con el metodo split()
// darle vuelta con el metodo reverse()
// unir el array con metodo join() y comparar

function palindromo(texto){ // recibe texto en string
    let invertido = texto.split('').reverse().join('');
    //split('') separa segun lo que se indique en sus parametros en este caso al 
    //no pasar nada convierte toda la palabra en un array con cada elemento de la palbra
    // si se usa split(" ") entonces separa por espacio 
    //si fueres split(",") repara cuando encunetre ,

    //reverse es un metodo para ARRAY invierte el orden de los elemntos 
    // une los elementos del ARRYA y los convierte en un solo elemento
                    
    console.log(invertido)
    if(invertido === texto){
        return true;
        
    }else{
           
        return false;
   

    }
}

console.log("es un palindromo " +palindromo('oolo'));
