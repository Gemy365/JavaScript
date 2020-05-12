//Google Question
function firstRepeatedCharacter(input) {
    const mySet = new Set() // 'Set' as 'Map' as 'Object'
    for (let i = 0; i < input.length; i++) {

        if (mySet.has(input[i])) {  // if Set has the first item  [Reject for first time because Set is empty]
            return input[i] // return this item

        } else {    // Otherwise
            mySet.add(input[i]) // Add this item into Set
        }
    }
    return undefined  // Return undefined if no item is repeated
}

array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
const FRC = firstRepeatedCharacter(array)
console.log(`The first repeated character is ${FRC}`) // It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4] //It should return 1

//Given an array = [2,3,4,5] //It should return undefined


