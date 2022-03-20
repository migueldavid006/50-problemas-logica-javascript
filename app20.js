// Dadas tus cadenas de texto, crear un algoritmo que
// compruebe si son anagramas entre si una cadena es un anagrama si usa los mismos caracterees
//
//no tener en cuenta epsacios, simbolo raros, puntos, etc
// la funcion devolvera true/false

//
//
//
//

function limpiarTexto(texto) {
    return texto
            .replace(/[^\w]/gi, '') // limpiando de caracteres raron con expreciones regulares
            // \gi = g=GLOBAL i=indistinto de mayuscula minuscula
            .toLowerCase() //convertir todo a minuscula
            .split("") // separa las letras en un array
            .sort() // ordennaod alfabeticamente desde la abcdefghij en adelante
            .join(''); // volver a recueperar el texto convertido en array
}

function anagrama(texto1,texto2) {
    return limpiarTexto(texto1) === limpiarTexto(texto2);
}

console.log(anagrama('laho ','hola'))