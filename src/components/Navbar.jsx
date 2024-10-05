import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-white.png'
const Navbar = () => {
  return (
    <div className='main-navbar'>
      <div className='navbar-first'>
        <NavLink to="/"><img src={logo}  className='logo' alt="Logo" />
        {/* <span className='logo-title'>Amit Hair Dressers</span> */}
        </NavLink>
        
      </div>
      <div className='navbar-mid'>
        <NavLink activeClassName="active" to='/'>Home</NavLink>
        <NavLink activeClassName="active" to='/service'>Service</NavLink>
        <NavLink activeClassName="active" to='/about'>About</NavLink>
        <NavLink activeClassName="active" to='/contact'>Contact</NavLink>
        <NavLink activeClassName="active" to='/appointement'>Appointement</NavLink>
      </div>
      <div className='navbar-last'>
        <NavLink activeClassName="active" to="/signin">SignIn</NavLink>
        <NavLink activeClassName="active" to="/signup">SignUp</NavLink>
      </div>
    </div>
  )
}

export default Navbar