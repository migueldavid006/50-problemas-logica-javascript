/// dado un numero debolvver su tabla d emultiplicar
//tabla multiplicar(unmero)

// funcion con parametro
// varabloe con texto encabezad
// buclo del 1 al 10
//ocncatenar variablo con string de nultiolicacion y resultado


function tablamultiplicar(num) {
   
    let resultado = `#tabla del ${num} \n`; //encabezado titulo de numero de TABLA DEL ...

//iniciar le BUCLE
    for (let i = 1; i <= 10; i++) {

        let multiplicacion = (i*num); // la variablr let toma valor del mismo numero
        //que es el parametro parametro multiplicado por el inicalizador que cambiar en cada ciclo del bucle
           
        
        resultado += `${i} x ${num} = ${multiplicacion} \n ` 
        //concatenando cpm += a reultado

       // console.log(multiplicacion);// es un valor distinto en cada bucle 
        //let cambia de valor en cada cambio del inicializador
    }
    return resultado;//a diferencia de console log 
    // resultado es lo que devuelve la funcion para su uso
}
console.log( tablamultiplicar()); // se invoca a la funcion 