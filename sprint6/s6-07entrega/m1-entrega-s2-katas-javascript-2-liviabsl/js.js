function add (x,y) {
return x+y
}
console.log(add(5,2))

function multiplicacao (a, b) {
    let resultadoMult = 0

    for (let i = 0; i<a; i++) {
        resultadoMult = add(resultadoMult, b)

    }
return resultadoMult
}
console.log(multiplicacao(2,3))



function potencia (y, z) {
    let resultadoPot = 1

    for (let i = 0; i<z; i++) {
        resultadoPot = multiplicacao(resultadoPot, y)

    }
return resultadoPot
}
console.log(potencia(3,2))



function fatorial (x) {
    let result = 1
    for (let i=x; i>=1; i--) {
        result = multiplicacao(result, i)
    }
    return result
}
console.log(fatorial(5))
