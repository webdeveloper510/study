import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import HomePage from '../Components/Home';
import LandingPage from '../Components/landing';
// import Mcast from '../Components/Mcast';
// import Omnix from '../Components/Omnix';
// import Fdp from '../Components/Fdp';
 import Anglia from '../Components/Anglia';
//import British from '../Components/British';

const Routers = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Anglia/>} />
          <Route path="/university/:id" element={<LandingPage />} />
        </Routes>
      </Router>
  )
}

export default Routers;