import React from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "./../assets/images/logo.svg"

export default function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <ul>
          <li className='logo-container'>
            <Link to='/'>
              <img src={logo} className='logo' alt='logo' />
            </Link>
          </li>
          <li>
            <NavLink to='/lessons'>Lessons</NavLink>
          </li>
          <li>
            <NavLink to='/todoapp'>Todo App</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
