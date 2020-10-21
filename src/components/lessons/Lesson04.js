import React from "react"

function Lesson04() {
  return (
    <div className='lesson' id='lesson-04'>
      <h2>Initial React App Cleanup</h2>
      <div className='row'>
        <div className='column'>
          <p>Initial project structure and dependencies</p>
          <pre>
            <code>{`
    my-app
    ├── README.md
    ├── node_modules
    ├── package.json
    ├── .gitignore
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── index.css
        ├── index.js
        ├── logo.svg
        └── serviceWorker.js
            `}</code>
          </pre>
        </div>
        <div className='column'>
          <p>Project structure after cleanup</p>
          <pre>
            <code>{`
    my-app
    ├── README.md
    ├── node_modules
    ├── package.json
    ├── .gitignore
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── App.js
        ├── index.css
        └── index.js
            `}</code>
          </pre>
        </div>
      </div>

      <p>
        After removing files, respectively clean code in remaining project
        files.
      </p>

      <ul>
        <li>
          <a
            href='https://www.youtube.com/watch?v=sBws8MSXN7A'
            target='_blank'
            rel='noopener noreferrer'
          >
            React JS Crash Course by Brad Traversy
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Lesson04
