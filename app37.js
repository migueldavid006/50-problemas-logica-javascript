// dado un array o un texto, devolver el elemento que mas aprece dentro del array o texto
// 
// 
// mapear elenentos en un json u recorerlo
// 


//si (datos)

 function masRep(datos) {

    //mapero recibe cada elemento y palabra de datos
    // en mapeo se asigna +1 ++ como valor de la llave elementoyyyyyyyyyy

     let mapeo ={},
        masFre = "", //elemento mas frecuente
        valor_mas_frecuente = 0; //VALOR mas frecuente
    
    // si (datos) es un string convertirlo a arrat con el metodo spli() identificando el tipo
    // pero si es un array
    if(typeof datos ==="string"){
        datos = datos.split(' ');
    }

    //recorrer los elementos de los datos
     for(let elemento of datos){
        
        if( mapeo[elemento]){
            mapeo[elemento]++;
        }else{
            mapeo[elemento] =1;
        }
    

    }

    //recorrer el pameo para obtener resultados
    //recorrer el indice 
    for(let elemento in mapeo){
        if(mapeo[elemento]> valor_mas_frecuente){
            valor_mas_frecuente = mapeo[elemento];
            masFre =elemento;
        }
    }
    console.log(valor_mas_frecuente,masFre)
 }

 masRep("cici cico cico la la todo slos demas dias")
 masRep([3,45,6,5,5,5,643,345,34,3,34,34,34,34,])