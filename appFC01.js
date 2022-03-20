//fiz buz si es multiplo de 3 fiz y 5buz
//ambos fizz bus

// function fizbuz() {
//     for(let i = 1; i <= 100;i++){

//         if(i % 3=== 0 && i % 5 ===0 ){

//             console.log('fiz buzz')

//         }else if(i%3===0){
            
//             console.log('fizzz')

//         }else if(i%5===0){

//             console.log('buzz')
//         }else{
//         console.log(i)

//         }
//     }
// }
// fizbuz()

function fizbuz() {
    for(let i = 1; i <= 100;i++){

       let mensaje = "";

        if(i%3===0){
            
            mensaje += "fizzz"

        }else if(i%5===0){

            mensaje += "buzzz"

        }
        console.log(mensaje || i)

        
    }
}
fizbuz()