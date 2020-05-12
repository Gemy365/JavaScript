class Hangman {
    constructor(word) {
        this.word = word.toLowerCase().split('') // Convert word to array of letters
        this.remainingGuesses = word.length - 1  // Length of word -1 from chance of game
        this.guessedLetters = [] // Store guessed letters into array
    }

    makingGuess(guess) {
        this.guess = guess.toLowerCase().split('') // Convert Guessed Word to array of letters
        this.guess.forEach((letter) => {
            const isUnique = !this.guessedLetters.includes(letter) // Check if array has this letter to be Unique [true of false]
            const badGuess = !this.word.includes(letter) // Check if original word has this letter or not [true of false]

            // if it true
            if (isUnique) {
                this.guessedLetters.push(letter) // Add letter into array
            }

            // if it true
            if (isUnique && badGuess) {
                // decrease 1 from his chance
                this.remainingGuesses--
            }
        })
    }

    getPuzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            const goodGuess = this.guessedLetters.includes(letter) || letter === ' ' // if array has letters of original word or has space
            // if it true
            if (goodGuess) {
                puzzle += letter // add letter to string
            } else {
                
                puzzle += '*' // add * to string
            }
        })

        return puzzle // return string
    }
}

const game1 = new Hangman('Cat') // Original word
game1.makingGuess('czt') // Guess word
console.log(game1.getPuzzle()) // Get Resault
console.log(game1.remainingGuesses) // Life of game

// const game2 = new Hangman('New Jersey')
// game2.makingGuess('New Jerzey')
// console.log(game2.getPuzzle())
// console.log(game2.remainingGuesses)
