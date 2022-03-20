// palabras que se leen igual izquierd a dreecha PALINDROMO  numeros CAPICUA

// => palindromo = split("").reverse().join("")

// funcion que recibe numeros y evalue si es capicua o no 
// devolvera true/false

const capicua = (numero = 0) => {
// lo rprimero que aremos es evaluar si el tipo de nuemro es NUMBER
//

    if(!numero) return console.log('no ingresaste numero');
    if(typeof numero !== "number") return console.error(`El valos ${numero} no es un numero`);

numero = numero.toString();
let alReves = numero.split("").reverse().join();

return( numero === alReves)
? console.info(`si es capucua ${numero} numero al reves ${alReves}`)
:  console.info(`NOO es capucua ${numero} numero al reves ${alReves}`)

}
capicua();
capicua(2662);
capicua(111111);
capicua(3455555);

