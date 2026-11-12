import './app.scss'
function App(){

function handledark(){
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
}

  return(
  <div className="App">
    <button onClick={handledark} >Dark</button>
    <form >
      <h1>Login Here</h1>
      <input type='email' placeholder='Enter your email'></input>
      <input type='password' placeholder='Enter your password'></input>
      <button>Submit</button>
    </form>
  </div>
  )
}
export default App