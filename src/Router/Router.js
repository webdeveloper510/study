import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
 import HomePage from '../Components/Home';
import Mcast from '../Components/Mcast';
import Manipal from '../Components/ManipalU';
import Vishalscc from '../Components/Vishalscc';
 import Omnix from '../Components/Omnix';
 import Fdp from '../Components/Fdp';
 import Anglia from '../Components/Anglia';
import British from '../Components/British';

const Routers = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/university/Anglia" element={<Anglia/>} />
          <Route path="/university/Mcast" element={<Mcast/>} />
          <Route path="/university/Manipal" element={<Manipal/>} />
          <Route path="/university/Omnix" element={<Omnix/>} />
          <Route path="/university/Fdp" element={<Fdp/>} />
          <Route path="/university/British" element={<British/>} />
        </Routes>
      </Router>
  )
}

export default Routers;