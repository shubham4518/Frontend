import React,{useReducer} from 'react'

const App = () => {
  const initialState = 0
  function reducer(state,action){
    switch(action){
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      case 'reset':
        return initialState  
      default:
        return state
    }
  } 
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
     <h1>Count - {state}</h1>
     <button onClick={()=>dispatch('add')}>Add</button>
     <button onClick={()=>dispatch('sub')}>Sub</button>
     <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default App