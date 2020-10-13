const fs = require('fs')
const chalk = require('chalk')

const getNotes = ()=>{
    const notes = loadNotes()
    notes.forEach((note)=>{
        console.log('note title:'+ note.title)
    })
}
const getNote = (title)=>{
    const notes = loadNotes()
    const selectNote = notes.find(x=>x.title ===title)
    if (selectNote) {
        console.log('note title:' + selectNote.title)
        console.log('note body:' + selectNote.body)
    } else {
        console.log('note not found')
    }
}
const addNote = (title, body)=>{
    const notes = loadNotes()
    const duplicateNote = notes.find(x=>{
        return x.title === title;
    });
    if(!duplicateNote)
    {
        notes.push({title: title, body:body})
        saveNotes(notes);
        console.log('New note added')
    }
    else
        console.log('duplicate note')
}
const removeNote = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter(x=>{
        return x.title !== title;
    });
    if(notes.length !==notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green('notes remove' + title))
    }
    else
        console.log(chalk.red('notes not found'))
}
const saveNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('./notes.json', dataJSON)
}
const loadNotes = ()=>{
    try {
        const fileBuff = fs.readFileSync('./notes.json')
        return JSON.parse(fileBuff.toString())
    }catch (e) {
        console.log(e)
        return []
    }
}
module.exports = {
    getNotes: getNotes,
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote
}