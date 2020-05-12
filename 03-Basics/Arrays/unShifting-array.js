console.log('Add new element onto the first of array') //Done
const todos = [{
    text: 'Order cat food',
    completed: false
},
{
    text: 'Clean kitchen',
    completed: true
}]

// Function to add element at the first of list
const AddElementOnotFirst = function(todo){
    todos.unshift(todo)
}

AddElementOnotFirst({text: 'Woke up!', completed: true}) // Send object as a param

console.log(todos) // print list of objects
