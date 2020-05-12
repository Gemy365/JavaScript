// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    //code here
    if(number === 2){
        return 2
    }
    return number * findFactorialRecursive(number-1)    // Recursion Like Tree
}

console.log(findFactorialRecursive(4))
  
function findFactorialIterative(number) {   // With loop
    let answer = number
    for(let i = answer -1; i > 1; i--){
        answer *= i
    }
    //code here
    return answer
  }
  
//   console.log(findFactorialIterative(5))