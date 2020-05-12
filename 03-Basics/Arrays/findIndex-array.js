console.log('Find index of element in array') //Done!
const todos = [{
    text: 'Order cat food',
    completed: false
},
{
    text: 'Clean kitchen',
    completed: true
}]

const findIndexOfElement = function(todos, elementText){
    return todos.findIndex(function(todo, index){ // find element by index
        return todo.text.includes(elementText) // retrun his index if it exists
    })
}

const index = findIndexOfElement(todos, 'kitchen')
console.log(index)
