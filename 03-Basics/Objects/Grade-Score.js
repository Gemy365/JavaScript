let Score = {
    score: 10
}

let Grade = function (Score, total) {

    // Check type of total & Score.
    if (typeof total !== 'number' || typeof Score !== 'number') {
        throw Error('Please provide numbers only!!')
    }

    let percent = (Score / total) * 100 // Percent of grade (%)

    let GradeLetter = ''

    if (percent >= 90) {
        GradeLetter = 'A'
    }
    else if (percent >= 80) {
        GradeLetter = 'B'
    }
    else if (percent >= 70) {
        GradeLetter = 'C'
    }
    else if (percent >= 60) {
        GradeLetter = 'D'
    }
    else {
        GradeLetter = 'F'
    }

    return `My Grade Letter is ${GradeLetter} for ${percent}%`
}

try {
    let result = Grade(Score.score, 20)

    console.log(result)
    
} catch (error) { // Wrok from throw Error
    console.log(error.message)
}
