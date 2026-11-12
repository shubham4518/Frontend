import React,{ useContext } from 'react'
import { DataContext,ThemeContext } from '../../App'
const Child100 = () => {
    const { name, place } = useContext(DataContext)
    const { mode, handleToggleMode } = useContext(ThemeContext)
  return (
    <div>
        <h1>My name is {name}</h1>
        <p>I live in {place}</p>
        
        <button onClick={handleToggleMode}>{mode}</button>
    </div>
  )
}

export default Child100