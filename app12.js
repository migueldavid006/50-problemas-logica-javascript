// dado un numero mostrar toods los numero desde ese al 0 de 8 en 8
// desde el maximo numero hacia el cero en descendente
//
//

function hastaCero(numero) {
    let  resultado = `--del numero${numero} al 0 -- \n `

    while(numero>0){
        resultado += `-nro ${numero} \n`
        numero -= 8;
    }
    resultado += "--fin--";
    resultado += "next problem!!"
    return resultado
 }

 console.log(hastaCero(1000))
