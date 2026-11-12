import React,{useState,useTransition} from 'react'

const App = () => {
  const[tab,setTab] = useState('Home')
  const [isPending, startTransition] = useTransition()

  function handleTabChange(tab){
    startTransition(() => {
      setTab(tab)
    })
  }
  return (
    <div>
      <button onClick={()=>handleTabChange('Home')}>Home</button>
      <button onClick={()=>handleTabChange('About')}>About</button>
      <button onClick={()=>handleTabChange('Contact')}>Contact</button>

      {isPending && <h1>Loading...</h1>}
      {tab === 'Home' && <h1>Home Page</h1>}
      {tab === 'About' && <h1>About Page</h1>}
      {tab === 'Contact' && <h1>Contact Page</h1>}
    </div>
  )
}

export default App