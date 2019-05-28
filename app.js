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
    handler: function(argv) {
        console.log(chalk.yellow('Adding a new note!' + ' Title: ' + argv.title))
        console.log(chalk.cyan(' Body: ' + argv.body))
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log(chalk.red('Removing the note'))
    }
})

// Create List command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function() {
        console.log(chalk.green('Listing the note'))
    }
})


// Create Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log(chalk.cyan('Reading the note'))
    }
})
yargs.parse()