//dados dos numerro sindicar cal es mayor y menor
//
//
//
//
// function mayor(num1,num2) {
//     if(num1<num2){
//         console.log(`el ${num2} es mayor que ${num1}`)
//     }else{
//         console.log(`el ${num1} es mayor que ${num2}`)
//     }
// }
// console.log(mayor(75656466523,46753))

function maroyMenor(a,b) {
    let resultado ="";
    if(a===b){
        resultado = " son iguaes"
    }else if(a>b){
        resultado = `el nuemro mayor es ${a} \n`;
        resultado += `el numero menor es ${b}`;
    }else if(a<b){
        resultado = `el nuemro mayor es ${b} \n`;
        resultado += `el numero menor es ${a}`;
    }
    return resultado;
}
console.log(maroyMenor(234,2345))