const chalk= require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

// ADD Command 
yargs.command({
    command:'add' ,
    describe: 'add a new note' ,
    builder: {
        title: { 
            dscribe:'note title',
            demandOption: true,
            type:"strings" 
        },
        body: {
            describe:'note body',
            demandOption: true,
            type:'strings'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
      
})

//  Remove command
yargs.command({
    command:'remove' ,
    describe: 'remove a note' ,
    builder: {
        title:{
            describe: 'note title',
            demandOption:true,
            type:'strings'
        }
    },
    handler:function(argv){
        notes.removeNote(argv.title)

    }
})

// Listing command
yargs.command({
    command:'list' ,
    describe: 'list your notes' ,
    handler:function(argv){
        console.log('listing all notes...')
        notes.listNotes()
    }
})

// Read command
yargs.command({
    command:'read' ,
    describe: 'read a note' ,
    builder: {
        title: {
            describe:'read a note',
            demandOption: true,
            type: 'strings'
        }        
    },
    handler:function(argv){
       notes.readNote(argv.title,)

    }
})

 yargs.parse()


  
