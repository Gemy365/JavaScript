//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0;

// First Solution
function fibonacci(n) { //O(2^n)
  
  if (n < 2) {
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2); // return result of recursions
}

// Second Solution
function fibonacciMaster() { //O(n)
  let cache = {}; // Cache to store the result
  return function fib(n) {  // Closures
    if (n in cache) { // if n (As key of object cache) in cache
      return cache[n];  // return result of this key
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n-1) + fib(n-2); // store result of recursions into key of cache
        return cache[n];  // return result of this key
      }
    }
  }
}

// Third Solution
function fibonacciMaster2(n) {  //O(n)
    calculations++;

  let answer = [0,1];
  for ( let i = 2; i <= n; i++) {
    answer.push(answer[i-2] + answer[i-1]);
  }
  return answer.pop();
}

const fasterFib = fibonacciMaster();

// console.log('Slow', fibonacci(35))
// console.log('DP', fasterFib(100));
console.log('DP2', fibonacciMaster2(6));
console.log('we did ' + calculations + ' calculations');

