// dados 2 arrays devolver un tercero que contenga los elentos en comnunes
// filtrar el array evaluando una condicion
// devolver el array nuevo

function elementosCOmunes(array1,array2) {
    //filter filtra array con la condicion que se le indica y devuelve un nuevo array
    const filtrado = array1.filter(elemento =>{
        //dentro del aconcidicon de filrter recorremoas cada elemento
        // inclide() devuelve true/false si encuentra una conincidencia dentro de palabra o array
       return array2.includes(elemento)
       // le pamoas el elelmento que recorremos al metodo includes del array2
    
       //LA FUNCION tiene que devolver el r4eultado de includes y no la variable filtado
    });

console.log(filtrado)
}

elementosCOmunes([4,5,6,7,8,9,19],[7,8,9,10,11,12,13,14,8,9,10])