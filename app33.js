// 
// hacer un rejol con el obejto date pero solo iniciar una vez
//

// crear clae
// iniccializar propiedades con ls hora actual
// con metodo set intervsl
//metodo para sumer segundos a a hora
//actualizar hors mimutos y segundos


class Reloj {
    constructor(){
        this.fecha = new Date();
        this.horas = this.fecha.getHours();
        this.minutos = this.fecha.getMinutes();
        this.segundos = this.fecha.getSeconds();
    }
    actualizar(segundos){
        this.segundos += segundos;
        //acualizar segundos
        if(this.segundos >=60){
            this.minutos++;
            this.segundos = 0;
        }
        //actulizar minutos
        if(this.minutos >= 60){
            this.horas++;
            this.minutos = 0;
        }
        if(this.horas >= 24){
            this.horas = 0;
        }
    }
    mostrar(){
    this.actualizar(1);
    console.log(`${this.horas} : ${this.minutos} : ${this.segundos}`);
}
encender(){
    setInterval(() => {
        this.mostrar();
    }, 1000);
}
}
let mi_reloj = new Reloj();
mi_reloj.encender();

// function reloj(params) {
//     setInterval(() => {
//         const fecha = new Date();
//         const horas = fecha.getHours()
//         const mminutos = fecha.getMinutes()
//         const segundos = fecha.getSeconds()
//         console.log(` ${horas} ${mminutos} ${segundos}`)

//     }, 1000);
// }
// console.log(reloj())