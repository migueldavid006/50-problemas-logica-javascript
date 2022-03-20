//dado un numero , invertirlo y devolverrlo a entero
//
//convertir el numero en un string
//crear un array por cada etra ocn el metodo split()
//darle la vuelta con el metodo reverse()
//convertir el sting en eun entrero con join()
//devolver la variable invertido con RETURN

 function invertirNumero(numero) {
     let invertido =parseInt( numero
                            .toString()
                            .split('')
                            .reverse()
                            .join('')
     );
    console.log(typeof invertido)
    return invertido;
 }
 console.log(invertirNumero(12345678))