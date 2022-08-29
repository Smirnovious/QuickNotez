import React, { useState} from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
const App = () => {
  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: 'This is an Example note',
    date: "2020-11-21"
  },
]);

// Helper Functions
// const getItem = (name) => JSON.parse(localStorage.getItem(name) ?? "null");
// const setItem = (name, item) => localStorage.setItem(name, JSON.stringify(item));

// const [notes, setInternalNotes] = useState(getItem("react-notes-app-data"));


// const setNotes = useCallback((newNotes)=>{
//   setItem("react-notes-app-data", newNotes);
//   setInternalNotes(newNotes);
// }, [setInternalNotes]);


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
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggle={setDarkMode}/>
        <SearchBar handleSearchNote = {setSearchText}/>
        <NotesList 
        notes={notes.filter(note => note.text.toLowerCase().includes(searchText.toLowerCase()))}
        handleAddNote={addNote}
        deleteNote={deleteNote}/>
      </div>
    </div>
  )
}

export default App