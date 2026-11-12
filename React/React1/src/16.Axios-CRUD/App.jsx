import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './16.Axios-CRUD/Home.jsx'
import Create from './16.Axios-CRUD/Create.jsx'
import Update from './16.Axios-CRUD/update.jsx'
import Read from './16.Axios-CRUD/read.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App