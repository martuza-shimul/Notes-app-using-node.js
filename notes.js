const fs = require('fs')
const chalk = require('chalk')

//Add note Function
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.bold.inverse('New note added!'))
    }else{
        console.log(chalk.red.bold.inverse('Note title already taken!'))
    } 
}

// Remove note Function
const removeNote = (title) => {
    const notes = loadNotes()
    const keepNotes = notes.filter((note) => note.title !== title )

    // const keepNotes = notes.filter(function(note){
    //     return note.title !== title
    // })

    if (notes.length > keepNotes.length){
        saveNotes(keepNotes)
        console.log(chalk.green.inverse.bold('Note removed!'))
    }else if(notes.length === keepNotes.length){
        console.log(chalk.red.inverse.bold('No note found!'))
    }


    // Alternative way
    /*const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    if (duplicateNotes.length !== 0){
        saveNotes(keepNotes)
        console.log(chalk.green.inverse.bold('Note removed'))
    }else{
        console.log(chalk.red.inverse.bold('No note found'))
    }*/
    
}


// Show Lists function
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.cyan.bold.inverse('Your Notes: '))
    const lists = notes.forEach((note) => {
        console.log(note.title)
    })
    
    
}

// Read note Function
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.green.bold.inverse(note.title))
        console.log(note.body)
    }else {
        console.log(chalk.red.bold.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e) {
        return []
    }  
}




module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}