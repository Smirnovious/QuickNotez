import React from 'react'
import { useState } from 'react';

const AddNote = ({handleAddNote}) => {
  const [noteText, setnoteText] = useState('')
  const characterLimit = 200;

  const handleChange = (e) => {
    if(characterLimit - e.target.value.length >= 0){
      setnoteText(e.target.value)
    } else {
      alert('Limit of 200 characters reached')
  }
}
  const handleSaveClick = (e) => {
    e.preventDefault()
    if(noteText.length > 0){
      handleAddNote(noteText)
      setnoteText('')
    } else {
      alert('Please enter a note')
    }
   
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
          <small>{characterLimit - noteText.length} Remaining</small>
          <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote;