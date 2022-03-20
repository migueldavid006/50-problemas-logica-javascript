// dado u objeto, comprobar si existe una propiedad 
//
//devolvera tru/false

function existePropiedad(objeto, propeidad) {
    return typeof objeto === 'object' && typeof propeidad === "string"
}

let usuario = {
    nombre: "eliot",
    apellido: "anderson"
}
console.log(existePropiedad(usuario,"nombre"))