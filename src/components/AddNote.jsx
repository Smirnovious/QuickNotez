import React from 'react'

const AddNote = () => {
  return (
    <div className='note new'>
        <textarea placeholder='type to add a note...' id="" cols="10" rows="8"></textarea>
        <div className="note-footer">
          <small>200 Remaining</small>
          <button className="save">Save</button>
        </div>
    </div>
  )
}

export default AddNote;