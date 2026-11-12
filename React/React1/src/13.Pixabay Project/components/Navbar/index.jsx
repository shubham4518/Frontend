import React from 'react'
import Input from './'
import {Button} from '../Button'
import {Link} from 'react-router-dom'
import './index.css'

const index = ({inputValue, setInputValue, handleSearch}) => {
  return (
	<div className='navbar'>
	<nav className='nav'>
	<div className='left'>
	<Link style={{textDecoration:'none',color:'white'}} to={'/'}><div className='logo'>IMAGE PIXABY</div></Link>
	</div>
	<div className='right'>
	<Input placeholder={'Search Data Here...'} value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
	<Button onClick={handleSearch}>Search</Button>
	</div>
	</nav>
	</div>
  )
}

export default index