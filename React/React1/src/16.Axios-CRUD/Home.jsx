import axios from 'axios'
import '../App.css'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const API_URL = 'http://localhost:3000/users'

const Home = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(API_URL)
            .then((res) => setData(res.data))
            .catch((error) => console.error('Unable to load users:', error))
    }, [])


    function handleDelete(id) {
        axios.delete(`${API_URL}/${id}`)
            .then(() => navigate('/'))
            .catch((error) => console.error('Unable to delete user:', error))
    }


  return (
    <div className='Home'>

    <main>
    <h1>AXIOS CRUD</h1>
    <Link to={'/create'}><button>Add +</button></Link>
    </main>

<hr></hr>


    <table  cellPadding={'10'} cellSpacing={'10'}>
        <thead>
            <tr>
                <td><b>Id</b></td>
                <td><b>Name</b></td>
                <td><b>Age</b></td>
                <td><b>Action</b></td>
            </tr>
        </thead>
        
        <tbody>
            {
                data.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>
                               <Link to={`/read/${user.id}`}><button>Read</button></Link>
                                <Link to={`/update/${user.id}`}><button>Update</button></Link>
                                <button onClick={()=>handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </div>
  )
}

export default Home