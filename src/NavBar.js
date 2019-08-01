import React from 'react'
import {NavLink}  from 'react-router-dom'

const NavBar = () =>{
  return(
    <>
      <span><NavLink to='/' exact >Home</NavLink> </span>
      <span><NavLink to='/levels' exact>Levels</NavLink> </span>
      <span><NavLink to='/oldcalc' exact>Old Calculator</NavLink> </span>

    </>

  )
}

export default NavBar
