import React,{useId} from 'react'

const App = () => {
  const id1 = useId()
  const id2 = useId()

  return (
    <div id={id1}>
      <h1 id={id2}>useId Hook Example see in console - </h1>
      {/* <p>Id 1: {id1}</p>
      <p>Id 2: {id2}</p> */}
    </div>
  )
}

export default App