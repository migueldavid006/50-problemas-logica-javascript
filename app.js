function multiplicar (numero) {


    let resultado=` ${numero}\n`;

    for (let i = 1; i < 10; i++) {
        let multiplicar = (i*numero);
       resultado+=` ${i} x ${numero}  = ${multiplicar} \n` 
    }
return resultado
} 
console.log( multiplicar(6))

