// dado un array de objetos devolver aficiones mas comunes de os aficiondos
//
//1ro definir el array de onejtoscon usuarios y con atributo de aficiones por cada usuario
//

function aficiones(arrobj) {
    let mapeo ={}; //objeto para guardar propiedades

    for(element of arrobj){           // arrobj.forEach(element => {
     //console.log(element);             //     console.log(element)
        for(aficion of element.aficiones){
           //console.log(aficion);
           if(!mapeo[aficion]){
               mapeo[aficion] =1;
           }else{
               mapeo[aficion]++;
           }
    }                                 

    

}
return mapeo;
}
const usuarios = [
    {nombre: "mu", aficiones: ["informatica", "cine", "videojuegos"]},
    {nombre: "juan", aficiones: ["informatica", "cine", "videojuegos"]},
    {nombre: "luis", aficiones: ["futbol", "cine", "videojuegos"]},
    {nombre: "jhon", aficiones: ["videojuegos", "futbol", "cine"]}
    
];

console.log(aficiones(usuarios));