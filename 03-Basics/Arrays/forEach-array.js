console.log('Looping for array') //Done!
const todos = [{
    text: 'Order cat food',
    completed: false
},
{
    text: 'Clean kitchen',
    completed: true
}]

const GetElements = function(todos){
    todos.forEach(function(todo, index){ // First param is looping into elements.. Second param is index of elements 
        console.log(`${index}. {${todo.text}, ${todo.completed}}`)
    })
}

GetElements(todos) // Send list as a param
