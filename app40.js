//dado un array de numero devolver el valor mas bak y el mas alto
//json

//oredenar el array original y seleccion el primer elemento y el ultimo

function altoBaj(numeros) {
    let ordenados = numeros.sort((a,b) => a - b)
    // console.log(ordenados)
    return{
        bajo:ordenados[0],
        alto: ordenados[ordenados.length -1]
    }
}
console.log(
    altoBaj([23,4342,2,3,3254,5,3,34,5,346,233,4,3])
)