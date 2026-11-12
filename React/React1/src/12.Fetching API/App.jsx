import React, { useEffect, useState } from 'react'
import './App.scss'
const App = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then((d)=>{ setData(d)})
          })

  return (
    <div className='App'>
      {
        data.map((item,index)=>{
          return(
            <div className="card">
              <img src={item.image} height={'200px'} width={'200px'}/>
              <div>{item.title}</div>
              <div>{item.price}</div>
              <div>{item.category}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default App