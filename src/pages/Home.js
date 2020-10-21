import React from "react"
import { NavLink } from "react-router-dom"
import cheapSheep from "./../assets/images/cheapSheep.svg"

function Home() {
  return (
    <div className='home'>
      <header className='home-header'>
        <img src={cheapSheep} className='home-logo' alt='logo' />
        <h1>
          <NavLink to='/lessons' className='home-link'>
            React Cheap Sheep
          </NavLink>
        </h1>
      </header>
    </div>
  )
}

export default Home
