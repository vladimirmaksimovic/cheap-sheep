import React from "react"

function Lesson05() {
  return (
    <div className='lesson' id='lesson-05'>
      <h2>Components</h2>
      <div className='row'>
        <div className='column'>
          <p>Class, stateful, container component</p>
          <pre>
            <code>
              {`
    // Import React library
    import React from "react"
    
    // Class based component
    class App extends React.Component {
      // render method
      render() {
        // return JSX
        return(
          <div>
            ... JSX code ...
          </div>
        )
      }
    }
    
    // Export component
    export default App
                `}
            </code>
          </pre>
        </div>

        <div className='column'>
          <p>Functional, stateless, props, UI component</p>
          <pre>
            <code>
              {`
    // Import React library
    import React from "react"
    
    // Functional component
    function App() {
      // return JSX
      return (
        <div>... JSX code ...</div>
      )
    }

    // Export component
    export default App
                `}
            </code>
          </pre>
        </div>
      </div>
      <ul>
        <li>
          <a
            href='https://www.youtube.com/watch?v=o4GCcSn-hEw&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=15'
            target='_blank'
            rel='noopener noreferrer'
          >
            Complete React Tutorial (& Redux) by Net Ninja
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Lesson05
