import React from 'react'

const DarkModeToggle = ({isDarkMode, onClick}) => {

  // TODO: Implement dark mode toggle logic
  
  return (
    <button onClick={onClick}>
      {isDarkMode? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
