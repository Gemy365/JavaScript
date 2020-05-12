let getArea = function (Fahrenheit) {
    // return Object 
    return { 
        Fahrenheit: Fahrenheit,
        Celsius: (Fahrenheit -32) / 1.8,
        Kelvin: ((Fahrenheit -32) / 1.8) + 273.15
    }
    
}

let AllOfData = getArea(50)
console.log(`Fahrenheit is ${AllOfData.Fahrenheit}`)
console.log(`Celsius is ${AllOfData.Celsius}`)
console.log(`Kelvin is ${AllOfData.Kelvin}`)