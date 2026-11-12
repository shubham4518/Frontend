import { useState,useEffect } from "react"
import '../App.css'
import axios from "axios"
import { Link, useParams,useNavigate} from "react-router-dom"


const Update = () => {
    const{id}= useParams()
    const[values,setValues]=useState({name:"",age:""})

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3000/users/' + id)
        .then((res)=>setValues(res.data))
        .catch((err)=>console.log(err))
    },[])

    

    function handleSubmit(event){
      event.preventDefault()
      axios.put('http://localhost:3000/users/'+id,values)
      .then(res=>{
          console.log(res)
          navigate('/')
      })
  }

  return (
    <div className="Create">
      <form>
         <h1>Update User Details</h1>
         <input type="text" value={values.name} name="name" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} placeholder="Enter Your Name"></input>
        <br></br>
        <input type="age" value={values.age} name="age" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} placeholder="Enter Your Email"></input>
        <br></br>
        <button onClick={handleSubmit}>Update</button>
        <Link to={'/'}><button>Back</button></Link>
      </form>
    </div>
  )
}

export default Update