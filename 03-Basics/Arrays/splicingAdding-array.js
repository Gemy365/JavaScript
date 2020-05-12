console.log('Add new element in index 1 and shift all the next elements') //Done!
const todos = [{
    text: 'Order cat food',
    completed: false
},
{
    text: 'Clean kitchen',
    completed: true
}]

const AddElementOnotIndex1 = function(todo){
    todos.splice(1,0,todo)  // 1-> The second index.... 0-> UnDelete
}

AddElementOnotIndex1({text: 'Back home!', completed: true}) // Send object as param

console.log(todos) // print list
