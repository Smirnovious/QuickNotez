import React from 'react'

const Header = ({handleToggle}) => {
  return (
    <div className="header">
        <h1>Super Notez</h1>
        <button onClick = {()=> handleToggle((prevDarkMode => !prevDarkMode))} className='save'>Toggle Mode</button>
    </div>
  )
}

export default Header