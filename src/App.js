import React, { useState } from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
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
  const [searchText, setSearchText] = useState('')


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
    <div className='container'>
      <Header />
      <SearchBar handleSearchNote = {setSearchText}/>
      <NotesList 
      notes={notes.filter(note => note.text.toLowerCase().includes(searchText.toLowerCase()))}
      handleAddNote={addNote}
      deleteNote={deleteNote}/>
    </div>
  </>
  )
}

export default App