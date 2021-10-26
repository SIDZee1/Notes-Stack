const fs = require('fs')
const chalk = require('chalk')

// ADD note function
const addNote = function (title, body){
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
     
        if(!duplicateNote){
        notes.push({
            title: title ,
            body : body   
        })
        saveNote(notes)
        console.log('note added!')
     } else {
         console.log('note title already exist!')
         }
}

// REMOVE note function
const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
 
    if (notes.length>notesToKeep.length){
        saveNote(notesToKeep)
        console.log(chalk.green.inverse('Note Removed'))
    } else{
        console.log(chalk.red.inverse('note does not exist'))
    }
}

// listing function
const listNotes = function(){
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log('title: ' + note.title + '  body: ' + note.body )
    })
}

//reading funtion
const readNote = function(title){
    const notes = loadNotes()
    const readNotes = notes.find((note) =>note.title === title )
    if(readNotes){
        console.log(chalk.blue.inverse('title: ' + readNotes.title))
        console.log(chalk.inverse('body: ' + readNotes.body))
    } else {
        console.log(chalk.red.inverse('No Note Found!!'))
    }
} 

const saveNote = function(notes) {
    const dataJSON = JSON.stringify(notes)
     fs.writeFileSync('notes.JSON', dataJSON )
}

const loadNotes = function (){

    try{
        const dataBuffer = fs.readFileSync('notes.JSON')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote : readNote
}