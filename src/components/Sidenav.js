import React from "react"

class Sidenav extends React.Component {
  render() {
    return (
      <div className='sidenav'>
        <a href='#lesson-01'>Intro to React</a>
        <a href='#lesson-02'>React Setup with CDN</a>
        <a href='#lesson-03'>Create a New React App</a>
        <a href='#lesson-04'>Initial React App Cleanup</a>
        <a href='#lesson-05'>Components</a>
        <a href='#lesson-06'>State</a>
        <a href='#lesson-07'>Props</a>
        <a href='#lesson-08'>
          <em>map()</em> and <em>filter()</em>
        </a>
        <a href='#lesson-09'>Component Lifecycles</a>
      </div>
    )
  }
}

export default Sidenav
