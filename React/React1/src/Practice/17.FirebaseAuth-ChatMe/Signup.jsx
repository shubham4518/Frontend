import React,{ useState } from 'react'
import {auth} from './Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link,useNavigate } from 'react-router-dom'
import './Signup.css'
const Signup = () => {
    const [email,setEmail]=React.useState("")
    const[password,setPassword]=React.useState("")

    const navigate=useNavigate()

    async function handleSignup(e) {
        e.preventDefault()
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredential)
            navigate('/Home')
            setEmail("")
            setPassword("")
            navigate('/Signin')
        } catch (error) {
            console.error(error)
        }
    } 

  return (
    <div className='Signup'>
    <form onSubmit={handleSignup}>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" />
    <br />
    <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
    <br/>
    <button type="submit">Sign Up</button>
    <br/>
    <br/>

    Already have an account? <Link to="/Signin">Sign In</Link>
    </form>
    </div>
  )
}

export default Signup