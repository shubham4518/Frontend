import React,{useRef} from 'react'

const App = () => {
  const inputRef = useRef()

  function handleClick(){
    inputRef.current.focus()
    inputRef.current.value()
  }
  return (
    <div>
      <input ref={inputRef} type="text" placeholder='Enter your name' /> 
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default App