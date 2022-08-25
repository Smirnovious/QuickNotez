import React, { useState } from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'
import SearchBar from './components/SearchBar'
const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: 'This is a new note',
    date: "2020-11-21"
  },
  {
    id: nanoid(),
    text: 'This is a second note',
    date: "2020-01-01"
  },
  {
    id: nanoid(),
    text: 'This is a third note',
    date: "2020-02-16"
  },
])

const addNote = (text) => {
  setNotes([...notes, {
    id: nanoid(),
    text: text,
    date: new Date().toLocaleDateString(),
  }])
}

const deleteNote = (id) => {
  setNotes(notes.filter(note => note.id !== id))
}


  return (
    <>
    <SearchBar />
    <div className='container'>
      <NotesList 
      notes={notes}
      handleAddNote={addNote}
      deleteNote={deleteNote}/>
    </div>
  </>
  )
}

export default App