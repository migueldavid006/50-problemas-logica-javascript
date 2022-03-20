// dado unnumero mostrar listado de los cuadrados de todo
// los numeros naturales hasta llegar al mismo
// 
// 
// 
function cuadrado(nume) {
    return nume*nume;
}

function mostrar(nume) {
    for (let i = 0; i < nume; i++) {
        console.log(cuadrado(i))
    }
} 
console.log(mostrar(34))