console.log('Remove element onto the end of array') //Done!
const todos = [{
    text: 'Order cat food',
    completed: false
},
{
    text: 'Clean kitchen',
    completed: true
}]

// Remove last object from the end of the list
const RemoveElement = function(){
    todos.pop()
}

RemoveElement() // Call function

console.log(todos) // print list of object
