console.log('Remove element onto the first of array') //Done!
const todos = [{
    text: 'Order cat food',
    completed: false
},
{
    text: 'Clean kitchen',
    completed: true
}]

// Function to remove the first element of the list
const RemoveElementOnotFirst = function(){
    todos.shift()
}


RemoveElementOnotFirst() // call function

console.log(todos) // print list
