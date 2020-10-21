import React from "react"

function Lesson02() {
  return (
    <div className='lesson' id='lesson-02'>
      <h2>React Setup with CDN</h2>
      <ol>
        <li>Create new project / folder,</li>
        <li>
          Create new <em>index.html</em> file and setup basic HTML structure
        </li>
      </ol>
      <pre>
        <code>
          {`
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React Setup with CDN</title>
    </head>

    <body>

    </body>

    </html>
            `}
        </code>
      </pre>

      <ol start='3'>
        <li>Add Babel JS and React CDN`s</li>
      </ol>

      <pre>
        <code>
          {`
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Net Ninja React Tutorial</title>
    
      <!-- Babel.js CDN -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
      <!-- React.js and React DOM CDN -->
      <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    </head>
            `}
        </code>
      </pre>

      <ul>
        <li>
          <a
            href='https://babeljs.io/setup#installation'
            target='_blank'
            rel='noopener noreferrer'
          >
            Babel JS CDN
          </a>
        </li>
        <li>
          <a
            href='https://reactjs.org/docs/cdn-links.html#gatsby-focus-wrapper'
            target='_blank'
            rel='noopener noreferrer'
          >
            React JS CDN
          </a>
        </li>
      </ul>

      <ol start='4'>
        <li>
          Create root React div with <em>app</em> id
        </li>
      </ol>
      <pre>
        <code>
          {`
    <body>
      <!-- React Root HTML element -->
      <div id="app"></div>
    </body>
          `}
        </code>
      </pre>

      <ol start='5'>
        <li>
          Create script element for react code and implement Babel transformer
        </li>
      </ol>

      <pre>
        <code>
          {`
      <!-- React script element, with Babel.js transformer -->
      <script type="text/babel">
        ... React code ...
      </script>
    </body>  
          `}
        </code>
      </pre>

      <ol start='6'>
        <li>Add React DOM render method at the end of script element</li>
      </ol>

      <pre>
        <code>
          {`
        // React DOM render method
        ReactDOM.render(<App />, document.getElementById('app'));
      </script>
    </body>
    
    </html>
          `}
        </code>
      </pre>

      <ul>
        <li>
          <a
            href='https://www.youtube.com/watch?v=SAX6RMEFVM4&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=3'
            target='_blank'
            rel='noopener noreferrer'
          >
            React Setup with CDN - Net Ninja
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Lesson02
