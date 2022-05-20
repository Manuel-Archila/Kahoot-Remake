import React from 'react'
import Navbar from './Navbar.jsx'
import Section from './Section.jsx'
import './App.css'
import Support from './Support.jsx'
import Info from './Info.jsx'

const App = () => (
  <div className="appcontainer">
    <Navbar />
    <Section />
    <Support />
    <Info />
  </div>
)

export default App
