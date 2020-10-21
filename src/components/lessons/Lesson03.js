import React from "react"

function Lesson03() {
  return (
    <div className='lesson' id='lesson-03'>
      <h2>Create a New React App</h2>
      <ol>
        <li>Create new project / folder</li>
        <li>In terminal start React install with command</li>
      </ol>
      <pre>
        <code>{`
    npx create-react-app my-app
        `}</code>
      </pre>

      <ol start='3'>
        <li>After install open app folder</li>
      </ol>

      <pre>
        <code>{`
    cd my-app
        `}</code>
      </pre>

      <ol start='4'>
        <li>Start local development sever</li>
      </ol>

      <pre>
        <code>{`
    npm start
        `}</code>
      </pre>

      <ol start='5'>
        <li>Create a minified bundle for production with</li>
      </ol>

      <pre>
        <code>{`
    npm run build
        `}</code>
      </pre>

      <ul>
        <li>
          <a
            href='https://reactjs.org/docs/create-a-new-react-app.html#gatsby-focus-wrapper'
            target='_blank'
            rel='noopener noreferrer'
          >
            React JS
          </a>
        </li>
        <li>
          <a
            href='https://create-react-app.dev/docs/getting-started'
            target='_blank'
            rel='noopener noreferrer'
          >
            Create React App
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Lesson03
