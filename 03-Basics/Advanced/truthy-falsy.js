const string = '' // falsy => false, 0, undefined, NaN, null, empty string

const object = {} // truthy => Any thing not in falsy.

// it's false So print falsy
if (string){
    console.log('This is truthy print')
}else{
    console.log('This is falsy print')
}

// it's true So print truthy
if (object){
    console.log('This is truthy print')
}else{
    console.log('This is falsy print')
}


