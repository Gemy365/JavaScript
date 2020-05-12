const people = [{
    name: 'Mohamed',
    age: 24
},{
    name: 'Gemy',
    age: 22
},{
    name: 'Gembo',
    age: 27
}]

const findAge22 = people.find((person) => person.age === 22) // Advanced of regular function

console.log(findAge22.name)
