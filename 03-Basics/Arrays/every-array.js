console.log('Return true if all `letters` are the same regardless the order of it otherwise return false') //Done!

const todos1 = ['G', 'e', 'm', 'y']

const todos2 = ['m', 'G', 'e', 'y']

const everyArray = function (todos1, todos2) {
    return todos1.every((todo) => todos2.includes(todo)) // every --> Check that [todos2] has the same chars that into [todos1]  
}

const allTrue = everyArray(todos1, todos2) 
console.log(allTrue)
