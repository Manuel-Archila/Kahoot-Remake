import React from 'react'
import Navbar from './Navbar.jsx'
import Section from './Section.jsx'
import Support from './Support.jsx'
import Info from './Info.jsx'
import Works from './Works.jsx'
import Banner from './Banner.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'
import './App.css'

const App = () => (
  <div className="appcontainer">
    <Navbar />
    <Section />
    <Support />
    <Info />
    <Works />
    <Banner />
    <About />
    <Footer />
  </div>
)

export default App
