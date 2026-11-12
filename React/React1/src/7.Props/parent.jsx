import React from 'react'
import Child from './7.Props/Child'

const App = () => {

  const name = "Shubham"
  const place = "India"

  function handleDark() {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
  }

  return (
    <div>
      <Child name="name" place="place" dark={handleDark} />
    </div>
  )
}

export default App