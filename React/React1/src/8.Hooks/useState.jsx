import React, { useState } from 'react'

const App = () => {

  const[count,setCount] = useState(0)
  function handleIncrement(){
    setCount((prev)=>prev + 1)
  }
  function handleDecrement(){
    setCount((prev)=>prev - 1)
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button  onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>  
    </div>
  )
}

export default App