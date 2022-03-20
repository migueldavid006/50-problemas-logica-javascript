// dado un array de alumnos nombre y nota
// mostrar cuatos estan aprobados y cunatos estans suspendidos

function suspensos(alumnos) {
    let aprovados = 0, suspendido = 0;

    for(alumno of alumnos){
if(alumno[1] >= 10){
        aprovados++;
        }   else{
            suspendido++;
        }

    }return {
        "aprovados" : aprovados,
        "suspendido": suspendido
}
}


console.log(suspensos(
[
    ["viso",10],
    ["juan",10],
    ["maro",3],
    ["mayo",9]
]))