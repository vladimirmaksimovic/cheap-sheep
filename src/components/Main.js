import React from "react"
import { Route } from "react-router-dom"
import Home from "./../pages/Home"
import Lessons from "./../pages/Lessons"
import TodoApp from "./../pages/TodoApp"
import About from "./../pages/About"

function Main() {
  return (
    <main className='main'>
      <Route exact path='/' component={Home} />
      <Route path='/lessons' component={Lessons} />
      <Route path='/todoapp' component={TodoApp} />
      <Route path='/about' component={About} />
    </main>
  )
}

export default Main
