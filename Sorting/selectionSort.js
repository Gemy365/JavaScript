const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {    // Nested for loop
        let smallest = i // Store index of smallest number
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallest]) {
                smallest = j    // Change the pointer 
            }
        }

        const temp = array[smallest]
        array[smallest] = array[i]
        array[i] = temp

        
    }
    return array
}

console.log(selectionSort(numbers))