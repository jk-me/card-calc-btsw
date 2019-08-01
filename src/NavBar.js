import React from 'react'
import {NavLink}  from 'react-router-dom'

const NavBar = () =>{
  return(
    <>
      <NavLink to='/' exact >Home</NavLink>
      <NavLink
        to='/oldcalc'
        exact
      >
        Old Calculator
      </NavLink>
      <NavLink to='/levels' exact>Levels</NavLink>
    </>

  )
}

export default NavBar
