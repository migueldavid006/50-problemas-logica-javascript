//dibujar un cuadrado hueco con asteriscos *
//funcion apra crear lado de arriba y abajo
//funciona para hacer LOS LADOS costados
//
// crear lado arriba y abajo
//
//hacer un bucle del 0 al tamano  de los lados y restarle 2
//paea equilibrara con el lado de arriba y abajoc
// el bucle para pintar lso espacion menos 2 para equilibrar co el astersco
// de ixquierda y derecha
//
// ir contando en una variable cada linea del cuadrado
// mostrarel cuadrado en la funcin rpincipal


//1.-crear  funcion que crea  los ladosnnn
function lado(numero) {
 let lado = ""   ;

 for(let i =0; i < numero;i++){
     lado += "*"

 }
 return lado;
}
//2.-
function cuadrado(numero) {

    // la variable dibuj guarda los arteriscos de lado y le agrega los costado=LADO
    let dibujo = lado(numero) + "\n"

    let contenido = "";

    for (let i = 0; i < (numero-2); i++) {
         contenido = "*";

             for(let x = 0; x <( numero-2); x++){
                 contenido += " ";
             }
             contenido += "*";
       dibujo += contenido + "\n";
    }
contenido += "*";
    dibujo += lado(numero);


    return dibujo;
}
console.log(cuadrado(5));