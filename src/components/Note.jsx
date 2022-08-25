import React from 'react'
import {MdDeleteForever} from 'react-icons/md'


const Note = ({id, text, date}) => {
  return (
    <>
    <div className="note">
        <span>{text}</span>
        <div className="note-footer">
        <small>Created on: <span>{date}</span></small>
        <MdDeleteForever className='delete' size='1.3em'/>
        </div>
    </div>
    </>
    )
}

export default Note