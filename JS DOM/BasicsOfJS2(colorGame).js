let numSquare = 6
let colors = []
let pickedColor

// get Elements of HTML to work with.
let squares = document.querySelectorAll('.square')
let colorDisplay = document.getElementById('colorDisplay')
let message = document.querySelector('#message')
let h1 = document.querySelector('h1')
let resetBtn = document.getElementById('reset')
let modeBtns = document.querySelectorAll('.mode')


// call init function
init()

// init function
function init() {
    setupModeButtons()
    setupSquares()
    reset()
}

// function for Easy & Hard buttons.
function setupModeButtons() {
    for (let i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener('click', function() {
            // remove selectiong of bg color for initial of looping.
            modeBtns[0].classList.remove('selected')
            modeBtns[1].classList.remove('selected')

            // this refer to clicked button. So add bg color to it.
            this.classList.add('selected')

            this.textContent === 'Easy' ? numSquare = 3 : numSquare = 6

            reset()
        })
    }
}


// function for Squares.
function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function() {
            let clickedColor = this.style.backgroundColor

            if (clickedColor === pickedColor) {
                message.textContent = 'Correct'
                resetBtn.textContent = 'Play Again ?'
                changeBgColor(clickedColor);
                h1.style.backgroundColor = clickedColor
            } else {
                this.style.backgroundColor = '#232323' // Dissapear square by give it same color of body color
                message.textContent = 'Try Again!'
            }
        })
    }

}

// reset function.
function reset() {
    resetBtn.textContent = 'New Colors'
    message.textContent = ''
    h1.style.backgroundColor = 'steelblue'

    colors = generateRandomColor(numSquare)

    // Random color
    pickedColor = pickColor()

    // Change h1 text to appear the rgb of the correct color.
    colorDisplay.textContent = pickedColor

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block' // appear all of 6 squares as an initial.
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = 'none' // disappear last 3 squares to make game hard.
        }
    }
}

// Generate random colors.
function generateRandomColor(num) {
    let arr = []

    for (let i = 0; i < num; i++)
        arr.push(randomColor())

    return arr
}

// Create random colors.
function randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
}

// pick random color from 'Colors List.'
function pickColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

// when hit reset button
resetBtn.addEventListener('click', function() {
    reset()
})

// Change bg color for all squares when winning.
function changeBgColor(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
}