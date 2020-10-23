import React from "react"
/* import { NavLink } from "react-router-dom" */
import cheapSheep from "./../assets/images/cheapSheep.svg"
import HTML5Logo from "./../assets/images/HTML5Logo.svg"
import CSS3Logo from "./../assets/images/CSS3Logo.svg"
import JSLogo from "./../assets/images/JSLogo.svg"
import PHPLogo from "./../assets/images/PHPLogo.svg"
import ReactLogo from "./../assets/images/ReactLogo.svg"
import VueLogo from "./../assets/images/VueLogo.svg"

function Home() {
  return (
    <div className='home'>
      {/* <h1>Cheap Sheep</h1> */}
      {/* <p>Cheap Sheep general description . . .</p> */}
      <img src={cheapSheep} className='home-logo' alt='logo' />
      {/* <h2>
        <NavLink to='/lessons' className='home-link'>
          React
        </NavLink>
      </h2>
      <img src={cheapSheep} className='home-logo' alt='logo' /> */}

      <div className="home-nav-container">
        {/* The trigger element that will show all circles when user clicks it */}

        {/* A circle menu item */}
        <div className="home-nav item-01">
          {/* The inner */}
          <div className="home-nav-inner inner-item-01">
            {/* The content */}
            <a href="#">
              <img src={HTML5Logo} className='home-logo-item' alt='HTML5' />
            </a>
          </div>
        </div>

        {/* Repeat menu items */}

        <div className="home-nav item-02">
          {/* The inner */}
          <div className="home-nav-inner inner-item-02">
            {/* The content */}
            <a href="#">
              <img src={CSS3Logo} className='home-logo-item' alt='CSS3' />
            </a>
          </div>
        </div>

        <div className="home-nav item-03">
          {/* The inner */}
          <div className="home-nav-inner inner-item-03">
            {/* The content */}
            <a href="#">
              <img src={JSLogo} className='home-logo-item' alt='JS' />
            </a>
          </div>
        </div>

        <div className="home-nav item-04">
          {/* The inner */}
          <div className="home-nav-inner inner-item-04">
            {/* The content */}
            <a href="#">
              <img src={PHPLogo} className='home-logo-item' alt='PHP' />
            </a>
          </div>
        </div>

        <div className="home-nav item-05">
          {/* The inner */}
          <div className="home-nav-inner inner-item-05">
            {/* The content */}
            <a href="#">
              <img src={ReactLogo} className='home-logo-item' alt='React' />
            </a>
          </div>
        </div>

        <div className="home-nav item-06">
          {/* The inner */}
          <div className="home-nav-inner inner-item-06">
            {/* The content */}
            <a href="#">
              <img src={VueLogo} className='home-logo-item' alt='Vue' />
            </a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home
