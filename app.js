const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize the yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            description: 'Note Description ..',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler() {
        notes.removeNote()
    }
})

// Create List command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler(argv) {
        notes.listNotes(argv.title)
    }
})


// Create Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse()