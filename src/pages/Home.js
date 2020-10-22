import React from "react"
import { NavLink } from "react-router-dom"
import cheapSheep from "./../assets/images/cheapSheep.svg"

function Home() {
  return (
    <div className='home'>
      <h1>Cheap Sheep</h1>
      <p>Cheap Sheep general description . . .</p>
      {/* <img src={cheapSheep} className='home-logo' alt='logo' /> */}
      <h2>
        <NavLink to='/lessons' className='home-link'>
          <img src={cheapSheep} className='home-logo' alt='logo' />
        </NavLink>
      </h2>
    </div>
  )
}

export default Home
