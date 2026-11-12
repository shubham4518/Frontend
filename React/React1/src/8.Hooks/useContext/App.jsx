import React,{useState,createContext} from 'react'
import Child100 from './8.Hooks/useContext/Child100'
import './App.scss'

const DataContext = createContext()
const ThemeContext = createContext()
const App = () => {
  const name = 'John Doe'
  const place = 'New York'

  const[mode,setMode] = useState('light')

  function handleToggleMode(){
    setMode(mode === 'light' ? 'dark' : 'light')

  }

  return (
    <div className={mode}>
    <DataContext.Provider value={{ name, place }}>
        <ThemeContext.Provider value={{ mode, handleToggleMode }}>
          <Child100 />
        </ThemeContext.Provider>
      </DataContext.Provider>
    </div>
  )
}

export { DataContext, ThemeContext }
export default App