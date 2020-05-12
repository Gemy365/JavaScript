//First Solution
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function insertionSort(array) {
  const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i,1)[0]) // splice return array.. [0] --> Get the first & the only value of the splice array
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i-1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j-1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j,0,array.splice(i,1)[0])  // add in index of 'j' what will remove from index 'i'
          }
        }
      }
    }
	}
}

insertionSort(numbers);
console.log(numbers);

// Second Solution
/* const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {

    for (let i = 0; i < array.length; i++) {
        while (array[i + 1] < array[i]) {
            const temp = array[i + 1]
            array[i + 1] = array[i]
            array[i] = temp
            i--
        }
    }

    return array
}


console.log(insertionSort(numbers)) */