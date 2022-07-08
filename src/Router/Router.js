import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '../Components/Home';
import LandingPage from '../Components/landing';

const Routers = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/university/:id" element={<LandingPage />} />
        </Routes>
      </Router>
  )
}

export default Routers;