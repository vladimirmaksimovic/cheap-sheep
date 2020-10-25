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
    <div className='grid-container'>
      <div className='grid-item div1'></div>
      <div className='grid-item div2'>
        <img src={HTML5Logo} alt='' />
      </div>
      <div className='grid-item div3'></div>
      <div className='grid-item div4'>
        <img src={CSS3Logo} alt='' />
      </div>
      <div className='grid-item div5'>
        <img src={VueLogo} alt='' />
      </div>
      <div className='grid-item div6'></div>
      <div className='grid-item div7'>
        <h1>Cheap Sheep</h1>
        <img
          src={cheapSheep}
          alt=''
          className='home-page-center-img'
        />
      </div>
      <div className='grid-item div8'></div>
      <div className='grid-item div9'>
        <img src={JSLogo} alt='' />
      </div>
      <div className='grid-item div10'>
        <img src={ReactLogo} alt='' />
      </div>
      <div className='grid-item div11'></div>
      <div className='grid-item div12'>
        <img src={PHPLogo} alt='' />
      </div>
      <div className='grid-item div13'></div>
    </div>
  )
}

export default Home
