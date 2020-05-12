console.log('Add new element onto the end of array') //Done!
const todos = [{
    text: 'Order cat food',
    completed: false
},
{
    text: 'Clean kitchen',
    completed: true
}]

// Function to add new object at the end of the list
const AddElement = function(todo){
    todos.push(todo)
}

AddElement({text: 'Take break!', completed: false}) // Send object as a param

console.log(todos) // print list of object
