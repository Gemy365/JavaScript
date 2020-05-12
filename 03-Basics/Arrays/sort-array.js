console.log('Sort the array Falses then Trues') //Done!
const todos = [{
    text: 'Order cat food',
    completed: false
},
{
    text: 'Clean kitchen',
    completed: true
},
{
    text: 'Buy food',
    completed: false
}]

const sortArray = function(todos){
    // Sort by getting false first then true
    return todos.sort(function(current, next){ // current element & next element 
        if(!current.completed && next.completed){ // if current element has [false] compeleted & next element has [true] compeleted
            return -1 // Not Swap
        }else if(current.completed && !next.completed){ // if current element has [true] compeleted & next element has [false] compeleted 
            return 1 // Swap
        }else{
            return 0 // Do Nothing
        }
    })
}

const sorting = sortArray(todos)
console.log(sorting)
