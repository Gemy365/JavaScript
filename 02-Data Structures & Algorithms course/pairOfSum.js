const PairOfSum = (arr, sum) => {
    let mySet = new Set() // 'Set' as 'Map' as 'Object'

   for(let i = 0 ; i < arr.length; i++) {
       if(mySet.has(arr[i])){  // if Set has the first item  [Reject for first time because Set is empty]
           return arr[i] // return this item
       }
       const comp = sum - arr[i] // complement
       mySet.add(comp)  // Add the complement to Set
    //    console.log(mySet)
    }

    return false    // Return false if [sum of two numbers] doesn't match with the sum

}


console.log(PairOfSum([1,5,3,8,2], 9))


