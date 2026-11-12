import React,{useState} from 'react'

export const App = () => {

    const [value, setValue] = useState('')
    const[data, setData] = useState([{id:1, task:'study React'}])
     function handleClick(){ 
        setData([...data, {id:data.length+1, task:value}])
        setValue('')
    }

    function handleDelete(id){
        setData(data.filter((item)=>item.id !== id))

    }

  return (
    <div>
        <input onChange={(e)=>setValue(e.target.value)} value={value} type="text" placeholder='Enter your Data ' />
        <button onClick={handleClick}>Add</button>
        {
            data.map((item,index)=> {
                return(
                    <div key={item.id}>
                        <span>{item.id} {item.task}</span>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    </div>
            )})
       }
    </div>
  )
}
export default App
