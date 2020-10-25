import React from "react"
import { Route } from "react-router-dom"
import Home from "./../pages/Home"
import Html from "./../pages/Html"
import Css from "./../pages/Css"
import Js from "./../pages/Js"
import Php from "./../pages/Php"
import ReactJs from "./../pages/ReactJs"
import VueJs from "./../pages/VueJs"
import TodoApp from "./../pages/TodoApp"
import About from "./../pages/About"

function Main() {
  return (
    <main className='main'>
      <Route exact path='/' component={Home} />
      <Route path='/html' component={Html} />
      <Route path='/css' component={Css} />
      <Route path='/js' component={Js} />
      <Route path='/php' component={Php} />
      <Route path='/reactjs' component={ReactJs} />
      <Route path='/vuejs' component={VueJs} />
      <Route path='/todoapp' component={TodoApp} />
      <Route path='/about' component={About} />
    </main>
  )
}

export default Main
