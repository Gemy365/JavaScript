// First Solution
function mergeSortedArrays(arr1, arr2) {
    const length = arr1.length + arr2.length    // Get length of two array for (For loop)
    let mergedArray = []
    let i = 0
    let j = 0
    while (arr1[i] || arr2[j]) {    // if Array1 or Array2 has items
        if (!arr2[j] || arr1[i] <= arr2[j]) { // if there's no item into second array && item of array1 < item of array2
            mergedArray.push(arr1[i])   // Push item of array1 into mergedArray
            i++   // increase counter
        } else {  // Otherwise
            mergedArray.push(arr2[j])   // Push item of array2 into mergedArray
            j++  // increase counter
        }
    }
    return mergedArray // return array
}


console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))

// Second Solution
// function mergeSortedArrays(arr1, arr2){
//     const length = arr1.length + arr2.length    // Get length of two array for (For loop)
//     let mergedArray = []
//     for(let i = 0; i < length -1; i++){ 
//         if(arr1[i] !== undefined)       // if there's item into first array
//             mergedArray.push(arr1[i])   // Push it into mergedArray

//         if(arr2[i] !== undefined)        // if there's item into second array
//             mergedArray.push(arr2[i])    // Push it into mergedArray
//     }

//     mergedArray.sort((current, next) => {    // Using sort method after combine two arrays together
//        return current < next ? -1 : 1   
//     })
//     return mergedArray
// }


// console.log(mergeSortedArrays([0,3,4,31],[4,6,30]))

