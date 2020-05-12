// Solution with Array
// Add to stack... 
//Discord
//Udemy
//google

class Stack {
    constructor() {
        this.arr = []
        this.length = 0;
    }
    // Print the first item.
    peek() {
        return this.arr[this.length -1]
    }
    // Add items into stack. Start adding from bottom to top
    push(value) {
        this.arr[this.length] = value
        this.length++
    }
    // Remove items from stack. Start removing from top to bottom
    pop() {
        delete this.arr[this.length -1]
        this.length--
        }
    //isEmpty
}

const myStack = new Stack();

myStack.push('google')
myStack.push('Udemy')
myStack.push('Discord')
myStack.pop()
myStack.pop()
myStack.pop()
console.log(myStack.peek())


console.log(myStack)


// Solution with Linked List
// // Add to stack... 
//   //Discord
//   //Udemy
//   //google

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;
//     }
//     // Print the first item.
//     peek() {
//         return this.top
//     }
//     // Add items into stack. Start adding from bottom to top
//     push(value) {
//         const newNode = new Node(value)
//         if (this.length === 0) {
//             this.top = newNode
//             this.bottom = newNode
//         } else {
//             newNode.next = this.top
//             this.top = newNode
//         }
//         this.length++
//     }
//     // Remove items from stack. Start removing from top to bottom
//     pop() {
//         if (this.top === this.bottom || !this.top) {
//             this.top = null
//             this.bottom = null
//         } else {
//             this.top = this.top.next
//         }
//         this.length--
//     }
//     //isEmpty
// }

// const myStack = new Stack();

// console.log(myStack.peek())
// myStack.push('google')
// myStack.push('Udemy')
// myStack.push('Discord')

// console.log(myStack)


