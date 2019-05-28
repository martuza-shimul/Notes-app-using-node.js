

// Introduction, Lecture-9

// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'My name is Martuza.');
// fs.appendFileSync('notes.txt', ' I am from Dhaka')

// Importing File

// const mart = require('./utils.js')
// const sum = mart(4, 2)
// console.log(sum)

const validator = require('validator')

const notes = require('./notes.js')

const printNotes = notes()

console.log(printNotes)

console.log(validator.isEmail('martuza@me.com'))