class HashTable {
  constructor(size){
    this.data = new Array(size);  // Size of array
  }

  // ( _ ) private function
  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length  // Create Unique & fixed address for every key 
    }
    return hash;
  }

  // Set new data
  set(key, value) {
    let address = this._hash(key);  // Store this new data into new address if it's not exists by hashing the key.
    if (!this.data[address]) {  // first time for every new data
      this.data[address] = [];  // Create empty array for new data
    }
    // push array of new data into the empty array (because if two data take the same address as linked list)
    this.data[address].push([key, value]);   
    return this.data;
  }

  // Get data by key to return it's value
  get(key){
    const address = this._hash(key);  // Get address of existing data by hashing the key.
    const currentBucket = this.data[address]  // Get the data stored into this address
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++){  // looping throw the array [if there's linked list]
        if(currentBucket[i][0] === key) {  // i --> looping of arrays   0 --> looping of key
          return currentBucket[i][1]  // return value of this array
        }
      }
    }
    return undefined; // return undefined if it doesn't exists
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
console.log(myHashTable)