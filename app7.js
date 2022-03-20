//dados dos numeros devolver cuantos numerso inparess del num1 al num2 hay entre ellos

// (nume1, mun2)  devuelve ()=> nros IMPARES

function impares(nume1,num2) {
    let contador = 0;


    while (nume1 < num2 ) {
        if(nume1%2 !==0) contador++
          
          
            // console.log("el  " + nume1 + " es impar")
        
        nume1++;
    }
    return contador;
}

console.log("numero impares" + impares(1,100));
