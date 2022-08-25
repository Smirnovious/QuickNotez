import React from 'react'
import {MdDeleteForever} from 'react-icons/md'


const Note = () => {
  return (
    <>
    <div className="note">
        <span>Hello this is our first note!</span>
        <div className="note-footer">
        <small>Created on: <span>12/12/2019</span></small>
        <MdDeleteForever className='delete' size='1.3em'/>
        </div>
    </div>
    </>
    )
}

export default Note