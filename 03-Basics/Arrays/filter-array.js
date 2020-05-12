const Notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, Eating a bit better'
}]

console.log('Filter the array to get note has `ne` char ')

const filteredNote = function(notes, query){
    return notes.filter(function(note, index){
        const matchedTitle = note.title.toLowerCase().includes(query) // Filter by title
        const matchedBody = note.body.toLowerCase().includes(query) // Filter by body
        
        return matchedTitle || matchedBody // Check if title of body true.. [Return note into new array to get them all]

    })
}

console.log(filteredNote(Notes, 'ne'))