console.log('Find index of Title & Delete object') //Done!
const todos = [{
    text: 'Order cat food',
    completed: false
},
{
    text: 'Clean kitchen',
    completed: true
}]

const deleteObject = function(todos, elementText){
    let index = todos.findIndex(function(todo, index){ // find index of the element
        return todo.text.includes(elementText)
    })

    // if index exists
    if(index > -1){
        todos.splice(index,1) // remove his object
    }
}

deleteObject(todos, 'kitchen')
console.log(todos)
