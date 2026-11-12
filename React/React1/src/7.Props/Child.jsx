import React from 'react'

const Child = (name,place,dark) => {
  return (
    <div>
        <h1>My name is {name} and I am from {place}</h1>
        <button onClick={dark}>Dark</button>
    </div>
  )
}

export default Child