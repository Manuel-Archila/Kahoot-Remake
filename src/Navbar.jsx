import React from 'react'
import './Navbar.css'

const Navbar = () => (
  <div className="navcontainer">
    <div className="tittle-container">
      <div className="Kahoottitle" />
    </div>
    <div className="todin">
      <div className="first-container">
        <button type="button" className="news">
          <div className="news-image" />
          <div className="textnews">News</div>
        </button>
        <div className="school">
          <div className="school-image" />
          <div className="textito">School</div>
        </div>
        <div className="work">
          <div className="work-image" />
          <div className="textito">Work</div>
        </div>
        <div className="home">
          <div className="home-image" />
          <div className="textito">Home</div>
        </div>
        <div className="study">
          <div className="study-image" />
          <div className="textito">Study</div>
        </div>
        <div className="academy">
          <div className="academy-image" />
          <div className="textito">Academy</div>
        </div>
        <div className="accesspass">
          <div className="accesspass-image" />
          <div className="textito">AccessPass</div>
        </div>
      </div>
      <div className="second-container">
        <button className="contact-button" type="button">Contact Sales</button>
        <div>
          <div className="textito">Explore Content</div>
        </div>
        <div>
          <div className="textito">Play</div>
        </div>
        <button className="signup" type="button">Sign Up</button>
        <div>
          <div className="textito">Log in</div>
        </div>
        <button className="lang" type="button">
          <div className="world" />
          <div>EN</div>
        </button>
      </div>
    </div>
  </div>
)

export default Navbar
