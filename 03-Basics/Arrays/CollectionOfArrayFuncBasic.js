const todos = [{
    text: 'first task',
    compeleted: true
    },{
    text: 'second task',
    compeleted: true
    },
    {
    text: 'third task',
    compeleted: false
    },
    {
    text: 'fourth task',
    compeleted: true
    },
    {
    text: 'fifth task',
    compeleted: false
    }]

    const pushElementFunc = function(element){
        return todos.push(element)
    
    }

    const unShiftElementFunc = function(element){
        return todos.unshift(element)
    
    }

    const shiftElementFunc = function(){
        return todos.shift()
    
    }

    const popElementFunc = function(){
        return todos.pop()
    
    }
    const spliceAddingElementFunc = function(element){
        return todos.splice(3,0,element)
    
    }
    const spliceRemovingElementFunc = function(){
        return todos.splice(3,1)
    
    }

    let element = {
        text: 'sixth task',
        compeleted: true
    }

    pushElementFunc(element)
    console.log('pushElementFunc')
    console.log(todos) 

    unShiftElementFunc(element)

    console.log('unShiftElementFunc') 
    console.log(todos) 

    shiftElementFunc()

    console.log('shiftElementFunc') 
    console.log(todos) 

    popElementFunc()

    console.log('popElementFunc') 
    console.log(todos) 

    spliceAddingElementFunc(element)

    console.log('spliceAddingElementFunc') 
    console.log(todos) 

    spliceRemovingElementFunc()

    console.log('spliceRemovingElementFunc') 
    console.log(todos) 
