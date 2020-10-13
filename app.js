const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes')
const yargs = require('yargs')

yargs.command({
    command:'add',
    describe: 'add a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note describe',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'read',
    describe: 'read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.getNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe: 'list notes',
    handler(){
        notes.getNotes()
    }
})

yargs.parse()
