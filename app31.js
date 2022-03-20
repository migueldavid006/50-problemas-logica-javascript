//
//
//

function angulo(abertura) {
        let resultado = "";

        if(abertura < 90){
            resultado = "angulo Aguno";
        } else if(abertura === 90){
            resultado = " angulo rectro";
        } else if (abertura>90 && abertura<180 ){
            resultado = "amgilo obstu";
        }else if(abertura === 180){
            resultado = " angul llano";
        }else if( abertura > 181 && abertura<360){
            resultado = " concao";
        }
        return resultado;
}

console.log(
    angulo(180)
)