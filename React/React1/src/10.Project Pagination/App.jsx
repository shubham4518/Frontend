import React,{useState} from 'react'
import Data from './10.Project Pagination/data.json'
const App = () => {

  const perPage = 10;
  const totalPages = Math.ceil(Data.length / perPage);
  const [currentPage,setCurrentPage] = useState(1)

  function getData(){
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return Data.slice(startIndex, endIndex);
  }
  function handlePrev(){
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }
  function handleNext(){
    if(currentPage < totalPages){
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div style={{textAlign:'center'}}>
    <table border={1} cellPadding={10} cellSpacing={0} style={{margin:'auto'}}>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {
          getData().map((item)=>{
            return(
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            )
          })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3}>
           @Copywrite Shubham
          </td>
        </tr>
      </tfoot> 
    </table>
    <br />
    <button disabled={currentPage === 1} onClick={handlePrev}>Prev</button>
    <span>{currentPage}/{totalPages}</span>
    <button disabled={currentPage === totalPages} onClick={handleNext}>Next</button>
    </div>
  )
}

export default App