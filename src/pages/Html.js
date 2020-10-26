import React from "react"

import Sidenav from "../components/Sidenav"
import Lesson01 from "../components/lessons/Lesson01"
import Lesson02 from "../components/lessons/Lesson02"
import Lesson03 from "../components/lessons/Lesson03"
import Lesson04 from "../components/lessons/Lesson04"
import Lesson05 from "../components/lessons/Lesson05"
import Lesson06 from "../components/lessons/Lesson06"
import Lesson07 from "../components/lessons/Lesson07"
import Lesson08 from "../components/lessons/Lesson08"
import Lesson09 from "../components/lessons/Lesson09"

function Html() {
  return (
    <div className='content'>
      <Sidenav />
      <section className='lessons'>
        <Lesson01 />
        <Lesson02 />
        <Lesson03 />
        <Lesson04 />
        <Lesson05 />
        <Lesson06 />
        <Lesson07 />
        <Lesson08 />
        <Lesson09 />
      </section>
    </div>
  )
}

export default Html
