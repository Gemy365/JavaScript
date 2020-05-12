console.log('Remove third element') //Done!
const todos = [{
    text: 'Order cat food',
    completed: false
},
{
    text: 'Clean kitchen',
    completed: true
}]

const RemoveElementOnotIndex1 = function(){
    todos.splice(1,1)  // 1-> The second index .... 1-> Delete
}

RemoveElementOnotIndex1() // call function

console.log(todos) // print list
