// dado  narray devoler los umero selevaods al cuadrado 
// eliminar lo que no sea numerico
//
//
function cuadrado(numeros) {
    let numeros_cuadrados = numeros
                                    .filter(numero => typeof numero === "number" )
                                    .map(numero => Math.pow(numero,2));
    return numeros_cuadrados;
}

console.log(
    cuadrado(["dssd", true,234,4,5,6,7,8,"11"])
)