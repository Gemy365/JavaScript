// 10-->5-->16
// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// }

// Class Node to create new node for us
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {   // init node will be the head
            value: value,
            next: null
        }
        this.tail = this.head   // tail = head if there's one node in linked list
        this.length = 1 // length of linked list
    }

    // add node at the end of linked list
    append(value) {
        const newNode = new Node(value) // call class node to get value & next
        this.tail.next = newNode    // tail.next = previous node.next
        this.tail = newNode // move tail to be last node
        this.length++   // increase length
    }

    // add node at the first of linked list
    prepend(value) {
        const preNode = new Node(value) // call class node to get value & next
        preNode.next = this.head    // make preNode.next = old head
        this.head = preNode // move head to be preNode
        this.length++   // increase length
    }

    // Add new node in specific index
    insert(index, value) {
        // If index = 0 that means it will be the new head
        if (index === 0) {
            this.prepend(value) // call prepend function
            this.length++   // increase length
            return this.printList()
        }
        // Otherwise.
        // Start looping from first node 
        let currentNode = this.head

        for(let i = 1; i < this.length; i++){
            if(i === index){
                const newNode = new Node(value) // call class node to get value & next
                newNode.next = currentNode.next // make new node.next link with the same of currentNode.next
                currentNode.next = newNode      // make currentNode.next link with new node
                this.length++   // increase length
                return     // stop function
            }else{
                currentNode = currentNode.next  // move the currentNode to be the next node
            }
        }
        return this.printList()
    }

    // remove node by index
    remove(index) {
        // if it the first node
        if (index === 0) {
            this.head = this.head.next // move head to be the next node
            this.length--   // decrease length
            return this.printList()
        }
        // Otherwise
        // Start looping from first node
        let currentNode = this.head
        for(let i = 1; i < this.length; i++){   // note:- currentNode is not equal the index it equals (index -1) because it starts from the head
            if(i === index){
                const unWantedNode = currentNode.next   // Store unWantedNode before removing it
                currentNode.next = unWantedNode.next    //  currentNode.next link with unWantedNode.next & [javascript garbage collection] will remove unWantedNode
                this.length--   // decrease length
                return     // stop function     
            }else{
                currentNode = currentNode.next  // move the currentNode to be the next node
            }
        }
        return this.printList()
     }

     // Make value of linked list into array 
     printList() {
        const array = [] // empty array
        let currentNode = this.head // start from the head
        while (currentNode) {
            array.push(currentNode.value)   // Push value of nodes into array
            currentNode = currentNode.next  // move the currentNode to be the next node
        }
        return array    // return array
    }
}

let myLinkedList = new LinkedList(10)   // Init value for the first node [Head]
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 3)   // index, value
console.log(myLinkedList.printList())
myLinkedList.remove(2)
console.log(myLinkedList.printList())
// console.log(myLinkedList)


