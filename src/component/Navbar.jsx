import React, { useState } from 'react'
import '../CSS/Navbar.css'

export default function Navbar() {
  const [menuVisible , setmenuVisible] = useState(false);
  function show_menu(){
    setmenuVisible(!menuVisible);
  }
  return (
    <>
      <div className="container">
          <div className="navbar_portfolio">
              <div className="welcome_responsive"><a href="" className="welcome_highlighter">Chinmay's Portfolio</a></div>
              <ul className="nav_item_container">
                  <li className="nav_bar_items"><a href="">Home</a></li>
                  <li className="nav_bar_items"><a href="">About me</a></li>
                  <li className="nav_bar_items"><a href="">Services</a></li>
                  <li className=""><a href="" className="welcome_highlighter">Chinmay's Portfolio</a></li>
                  <li className="nav_bar_items"><a href="">Resume</a></li>
                  <li className="nav_bar_items"><a href="">Project</a></li>
                  <li className="nav_bar_items"><a href="">Contact</a></li>
              </ul>

              <div className="hamburger" onClick={show_menu}><i className="bi bi-list"></i></div>
              <div className={`menu_responsive ${menuVisible ? 'show' : 'hide'}`}>
                  <ul className="responsive_menu_options">
                      <li><a>Home</a></li>
                      <li><a>About me</a></li>
                      <li><a>Services</a></li>
                      <li><a>Resume</a></li>
                      <li><a>Project</a></li>
                      <li><a>Contact</a></li>
                  </ul>
              </div>
          </div>
      </div> 
    </>
  )
}
