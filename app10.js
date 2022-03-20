// dado un numero mostrar una ecalera con escalones de [-]
//usando el nuemro para lksi niveles d eescalera
//
// [-]
// [-][-]
// [-][-][-]
// [-][-][-][-]

//recorrer el numero de niveles de la escalera
//en ada iteracion pintar los escalonres de ese nivel
//hacinedo un bucle desde 1 hasta el nivel en el que estmos
//

function escalera(numero) {
    let escaleraCompleta = "";

    //hacer un bucle que recorra desde #1
    for (let nivel = 1; nivel <= numero; nivel++) {

        let escalones ="";
        //escalon tomara los valores del 1-10 en cada ciclo tomara un valor 
        //reserva es[acio para que el 2do for agregue los escalones]
        for (let escalon = 0; escalon < nivel; escalon++) {
            //en el segundo for la concicion indica q mientras 
            escalones += "[-]";            
        }

        // console.log(escalones)
        escaleraCompleta += escalones + '\n';

    }
    return escaleraCompleta;    

}
console.log(escalera(10)
)