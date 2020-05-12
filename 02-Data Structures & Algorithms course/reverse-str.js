// Reverse 'Hi my name is Gemy'
function reverse(...str) {      // ...str   One or more string

     let arr = []

     // First solution.
     // let counter = 0
     // for(let i = str.length -1; i >= 0 ; i--){
     //     arr[counter] = str[i]
     //     counter++
     // }
     // return arr.join('')   // join --> combine chars together

     // Second solution.
     for (let i = str.length - 1; i >= 0; i--) {
          arr.push(str[i])
     }
     return arr.join('')

     // Third solution.
     // return str.split('').reverse().join('')  

}

console.log(reverse('Hi my name is Gemy'))