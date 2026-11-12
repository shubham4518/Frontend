import React from 'react'
import ChildA from './8.Hooks/PropDrilling/ChildA'
const App = () => {
  const name1 = "Prop Drilling Example"
  const place = "India"
  return (
    <div>
      <ChildA name1={name1} place={place} />
    </div>
  )
}

export default App