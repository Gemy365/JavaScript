// way to access this p tag <p id="first" class="special">Hello</p>
let p = document.querySelector('#first') // Get element by ID

/* Other ways to access this p tag  // <p id="first" class="special">Hello</p>

let p = document.getElementById('first')    // Get element by ID
let p = document.getElementsByClassName('special')[0]  // Return Node list (like Array list) of classes
let p = document.getElementsByTagName('p')[0]  // Return Node list of tags 
let p = document.querySelector('.special')      // Get element by class name
let p = document.querySelector('p')       // Get element by tag name
let p = document.querySelectorAll('.special')[0]  // Return Node list of classes
let p = document.querySelectorAll('p')[0]  // Return Node list of tags
let p = document.querySelectorAll('#first')  // Return Node list of IDs

*/

/* // way to add style to the selector element.

p.style.background = '#00ff00'
p.style.border = ' 1px purple solid' 

*/

// another way to add style to the selector element by adding class from css file to classList..
p.classList.add('addStyleToPTag')

// remove style from classList.
p.classList.remove('addStyleToPTag')

// setInterval.. run this function every 1sec in this case.
setInterval(function() {
    // if this class into classList toggle will remove it Otherwise toggle will add it.
    p.classList.toggle('addStyleToPTag')

}, 1000)

// get element by tag name & select the first h1 from node list.
let text1 = document.getElementsByTagName('h1')[0]

// get element by class name.
let text2 = document.getElementsByClassName('text2')[0]

// textContent for text only doesn't allow html tags.
text1.textContent = 'I have a <strong>strong</strong> tag!'

// innerHTML for text & allow html tags.
text2.innerHTML = 'I have an <em>em</em> tag!'

// get a tag.
let a = document.querySelector('a')

// change the href attribute from google to youtube.
a.setAttribute('href', 'https://www.youtube.com')

// get a tag.
const btn = document.querySelector('button')
let isPurple = false

// // add event listener when click on button
// btn.addEventListener('click', function() {
//     // change bg of body to purlpe
//     if (!isPurple) {
//         document.querySelector('body').style.background = 'purple'
//     } else {
//         document.querySelector('body').style.background = 'white'
//     }
//     isPurple = !isPurple
// })

// other way to change bg color of body
btn.addEventListener('click', function() {
    // change bg of body to purlpe by using purpleClass from css.
    document.querySelector('body').classList.toggle('purpleClass')
})

// get a tag.
let li = document.querySelector('li')

// mouseover means hover --> make mouse on text
li.addEventListener('mouseover', function() {
    this.classList.add('touched')
    li.textContent = 'Move away or Click me!'
})

// mouseout --> make mouse move away from text
li.addEventListener('mouseout', function() {
    this.classList.remove('touched')
    li.innerHTML = '<h2>Touch me again or Click me!</h2>'
})

// when click on text
li.addEventListener('click', function() {
    this.classList.add('clicked')
})