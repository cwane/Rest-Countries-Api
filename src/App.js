import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Filter from './components/Filter'
import Countries from './components/Countries'
import Country from './components/Country'

function App() {
  return (
  
    <Router>
      <>
        <Header />
        {/* <Filter /> */}
       <Routes>
        <Route exact path="/" element={<Countries />} />
        <Route path="/countries/:name" element={<Country />} />
        </Routes>

      </>
    </Router>
    
  )
}

export default App