import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Data from './db.json'
import '../App.css'

const Read = () => {
    const {id} = useParams()
    const[data,setData]=useState([])
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get('http://localhost:3000/users/'+id)
        .then(res=>setData(res.data))
    })
  return (
    <div className="Read">
    <div className="divread">
        <h1>Read  Data</h1>
        <p>{data.name}</p>
        <p>{data.age}</p>
        <button>Update</button>
        <button onClick={()=>navigate('/')}>Back</button>
    </div>
    </div>
  )
}

export default Read