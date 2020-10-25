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
            <NavLink to='/html'>HTML5</NavLink>
          </li>
          <li>
            <NavLink to='/css'>CSS3</NavLink>
          </li>
          <li>
            <NavLink to='/js'>JS</NavLink>
          </li>
          <li>
            <NavLink to='/php'>PHP</NavLink>
          </li>
          <li>
            <NavLink to='/reactjs'>React</NavLink>
          </li>
          <li>
            <NavLink to='/vuejs'>Vue</NavLink>
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
