// fibonaci
//
//
//crear funcun conparametro numero
// crear variable cond los primeros numeros de la serie
//bucle desde dos al numero
//devolver resultado

function fibonaci(num) {
    let serie = [0,1]

    for(let i =2; i<= num; i++){
        serie.push(serie[i -1]+ serie[i-2]);
    }
    return serie;
}console.log(
fibonaci(17)

)