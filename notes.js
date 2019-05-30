const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return "Your notes ....."
}

//Add note Function
const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

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
const removeNote = function(title) {
    const notes = loadNotes()
    const keepNotes = notes.filter(function(note){
        return note.title !== title
    })

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


const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e) {
        return []
    }  
}




module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}