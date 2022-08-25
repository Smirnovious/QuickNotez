import React from 'react'
import {MdDeleteForever} from 'react-icons/md'


const Note = ({id, text, date, deleteNote}) => {
  return (
    <>
    <div className="note">
        <span>{text}</span>
        <div className="note-footer">
        <small>Created on: <span>{date}</span></small>
        <MdDeleteForever className='delete' size='1.3em' onClick={()=> deleteNote(id)}/>
        </div>
    </div>
    </>
    )
}

export default Note