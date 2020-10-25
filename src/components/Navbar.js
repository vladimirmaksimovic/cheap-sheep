import React from "react"
import { Link, NavLink } from "react-router-dom"
/* import logo from "./../assets/images/logo.svg" */

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li className='navbar-brand'>
          <Link to='/'>
            <i class='fas fa-code'></i>
          </Link>
        </li>
        <li className='navbar-link-01'>
          <NavLink to='/html'>
            <i class='fab fa-html5'></i>
          </NavLink>
        </li>
        <li className='navbar-link-02'>
          <NavLink to='/css'>
            <i class='fab fa-css3-alt'></i>
          </NavLink>
        </li>
        <li className='navbar-link-03'>
          <NavLink to='/js'>
            <i class='fab fa-js-square'></i>
          </NavLink>
        </li>
        <li className='navbar-link-04'>
          <NavLink to='/php'>
            <i class='fab fa-php'></i>
          </NavLink>
        </li>
        <li className='navbar-link-05'>
          <NavLink to='/reactjs'>
            <i class='fab fa-react'></i>
          </NavLink>
        </li>
        <li className='navbar-link-06'>
          <NavLink to='/vuejs'>
            <i class='fab fa-vuejs'></i>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to='/todoapp'>Todo App</NavLink>
        </li> */}
        {/* <li>
            <NavLink to='/about'>About</NavLink>
          </li> */}
      </ul>
    </nav>
  )
}
