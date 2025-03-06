import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import TechData from './Pages/TechData'
import TechDetails from './Pages/TechDetails'
import Header from './Component/Header'
import Footer from './Component/Footer'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/techData' element={<TechData />} />
        <Route path='/tech/:id' element={<TechDetails />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
