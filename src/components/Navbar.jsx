import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-white.png'
const Navbar = () => {
  let authoize = true;
  return (
    <div className='main-navbar'>
      <div className='navbar-first'>
        <Link to="/"><img src={logo}  className='logo' alt="Logo" />
        {/* <span className='logo-title'>Amit Hair Dressers</span> */}
        </Link>
        
      </div>
      <div className='navbar-mid'>
        <Link to='/'>Home</Link>
        <Link to='/service'>Service</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/appointement'>Appointement</Link>
      </div>
      <div className='navbar-last'>
        <Link to="/signin">SignIn</Link>
        <Link to="/signup">SignUp</Link>
      </div>
    </div>
  )
}

export default Navbar