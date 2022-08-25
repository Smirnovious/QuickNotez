import React from 'react'
import { useState } from 'react';

const AddNote = ({handleAddNote}) => {
  const [noteText, setnoteText] = useState('')

  const handleChange = (e) => {
    setnoteText(e.target.value)
  }
  const handleSaveClick = (e) => {
    e.preventDefault()
    handleAddNote(noteText) 
  }

  return (
    <div className='note new'>
        <textarea 
        placeholder='type to add a note...'  
        cols="10" 
        rows="8"
        onChange={handleChange}
        value={noteText}
        ></textarea>
        <div className="note-footer">
          <small>200 Remaining</small>
          <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote;