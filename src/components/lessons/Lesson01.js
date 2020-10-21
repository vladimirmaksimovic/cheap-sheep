import React from "react"

function Lesson01() {
  return (
    <div className='lesson' id='lesson-01'>
      <h2>Intro to react</h2>
      <p>
        Find out what is React, how it works and what is a Single Page
        Application (<em>SPA</em>)
      </p>
      <ul>
        <li>
          <a
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React JS
          </a>
        </li>
        <li>
          <a
            href='https://www.youtube.com/watch?v=aVKaEbDRA7I&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=11'
            target='_blank'
            rel='noopener noreferrer'
          >
            Single Page Apps
          </a>
        </li>
        <li>
          <a
            href='https://www.taniarascia.com/getting-started-with-react/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React Tutorial: An Overview and Walkthrough by Tania Rascia
          </a>
        </li>
        <li>
          <a
            href='https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=1'
            target='_blank'
            rel='noopener noreferrer'
          >
            Complete React Tutorial (with Redux) by Net Ninja
          </a>
        </li>
        <li>
          React Developer Tools (
          <a
            href='https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi'
            target='_blank'
            rel='noopener noreferrer'
          >
            Chrome
          </a>
          &nbsp;/&nbsp;
          <a
            href='https://addons.mozilla.org/en-US/firefox/addon/react-devtools/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Firefox
          </a>
          )
        </li>
      </ul>
    </div>
  )
}

export default Lesson01
