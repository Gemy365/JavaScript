console.log('Find object in array') //Done!
const todos = [{
    text: 'Order cat food',
    completed: false
},
{
    text: 'Clean kitchen',
    completed: true
}]

const findElement = function(todos, elementText){
    return todos.find(function(todo, index){ // find element
        return todo.text.includes(elementText) // return his object if it exists
    })
}

const element = findElement(todos, 'kitchen')
console.log(element)
