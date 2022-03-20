// dada una palabra buscarla en un afrase y devolver cuantas 
//veces apararece repetida en la frase 
//
//la frase y la palabra deben ser parametros de una funcion
//funcion recibe parametro frase y palaabra a buscar
//aplicar toLowerCase para poner en minuscula el string y limpiarlo de simbolos
//comprobar si la busqueda esta incluida
//crear un array con el metodo split(" ") recibe la frase string y las sepasra por el espacio  
//mapear las palabras y hace un contados
//devolver el contador de la bsuqueda

//1.- definiendo funcion
function concidencia(frase, busqueda) {
//2.- Limpiando la fraseconvirtiendola a minuscula replace() remeplza los simbolos raros por nada ose los elimina
// usar expreciones regualres /[ exprecioens regulares dsalkjasd@$^^$#!]/
//comprobar si la biusqueda esta en la frase
        let texto_limpio = frase.toLowerCase().replace(/[¡!.,-]/gi, '')

        let resultado = 0

        if(texto_limpio.includes(busqueda)){
            // si la palabra del parametro de includes existe en la frase enconces procede a =>
            //includes busca lo que se busca en los parametros devuelve TRUE/FALSE

            let palabras = texto_limpio.split(" ")
            //crear u narray de las palabras
            //crear una varible contendra el string "convertido " en ARRAY mediante split(" ")

            let mapa = {};
            
            //cada palabra sera propiedad de un JSON y se podra contar la palabras

            for(let palabra of palabras){ // recorriendo cada palabra de la  " frase=palabras "

                    //crear un propiedad dentro del json por cada valor
                    //SE ANADIRA LA PALABRA COM INDICE
                    //luego re recorrer el arreglo palabras teniendo cada elemento del arreglo
                    //en palabra AGREGARLA/ INSERTARLA al objeto map
                    // le agrgaremos una propiedad de un numero que se incremente si se repite
                    // entonces palabra/valor es el indice y el numero ++ sera la propiedad


                    //si la palabra no existe le da un valor 1 pero si existe le va sumando uno
                    if(mapa[palabra]){//si existe palabra en el abjeto map{}
                        //AGRGANDO PALABRA AL OBJETO MAP
                        mapa[palabra]++;//agregara un valor que se incrementa si se repite
                        //si la palabra se repite se va incrementando el valor
                    }else{// de lo contrario si la palabra aun no existe 
                        mapa[palabra] = 1;
                        //si la palabra no existe se le agrega 1
                    }

            }
            resultado = mapa[busqueda];
            
            console.log(palabras);
            console.log(mapa);

        }else{
            resultado = 0;

        }
       
return resultado;


}
console.log( concidencia("sadf hoal  alo alo alo al oalo ","alo"));
// const frasee = "af kjhgjh jhg kjg ^^& ^& $#$% 6547kjg kjjkgk jhgkj kjg kj kjg kjhg kjhg jkhg kjg kjhg jkhg   jhg  gj j 5 "
// const convertido=frasee.replace(/[¡!.#$&$%&(*%^&@#$%),-]/gi, '').split(" ")
// console.log(convertido)

