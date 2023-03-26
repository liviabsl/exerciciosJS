    function add (num1,num2) {
        
        let resultado= num1+num2
        return resultado
        }
        console.log(add(5,2))
    
    
        function multiply (a, b) {
        let resultadoMult = 1
    
        for (let i = 0; i<a; i++) {
            resultadoMult = add(resultadoMult, b)
    
        }
    return resultadoMult
    }
    console.log(multiply(4,6))
    
    
    function power (y, z) {
        let resultPower = 1
    
        for (let i = 0; i<z; i++) {
            resultPower = add(resultPower, y)
    
        }
    return resultPower
    }
    console.log(power(3,4))
    
    
    function factorial (x) {
        let result = 1
        for (let i=x; i>=1; i--) {
            result = multiply(result, i)
        }
        return result
    }
    console.log(factorial(5))
    