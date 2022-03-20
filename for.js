const miArray = [
    [1,2,3],
    [4,5,6,7,8,9],
    [10,11,12,13]
];

miArray[0];  // [1,2,3,]


// con el primer for se recuperan los objetos 0 , 1 , 2
for (let index = 0; index < miArray.length; index++) {
    let fila = miArray[index];// "fila" ES CADA OBJETO contien el valor de un solo ARRAY con los elementos que contenga
console.log(fila)
    
    for (let x = 0; x < fila.length; x++) {
console.log(fila[x])
        
    } 

}