import React from 'react'
import Navbar from './13.Pixabay Project/components/Navbar/index'
// import {useGetImagesQuery} from './app/ImageSlice'
import Card from './13.Pixabay Project/components/Card/index'
import Image from './13.Pixabay Project/components/Image/index'
import Footer from './13.Pixabay Project/components/Footer/index'
import Pagination from './13.Pixabay Project/components/Pagination/index'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'


const App = () => {
	const[search,setSearch]=React.useState('cats')
	const[inputValue,setInputValue]=React.useState('cats')
	const[currentPage,setCurrentPage]=React.useState(1)


	const {data, error, isLoading} = useGetImagesQuery({search: search, page: currentPage, perPage: 10})

	function handleSearch(){
		setSearch(inputValue)
		setCurrentPage(1)
	}

	function handlePrev(){
		setCurrentPage((prev)=>prev - 1)
	}

	function handleNext(){
		setCurrentPage((prev)=> prev + 1)
	}

  return (
	<div className='App'>
	<BrowserRouter>
	<Navbar inputValue={inputValue} setInputValue={setInputValue} handleSearch={handleSearch}/>
		<Routes>
			<Route path='/' element={
				<div>
				<Card isLoading={isLoading} error={error} data={data}/>
				<Pagination handlePrev={handlePrev} handleNext={handleNext} currentPage={currentPage} data={data}/>
				</div>
				}
				/>
			<Route path='/image/:id' element={<Image/>}/>	
		</Routes>
	<Footer/>
	</BrowserRouter>	
	</div>
  )
}

export default App