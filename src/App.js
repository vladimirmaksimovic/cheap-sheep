import React from "react"
import { BrowserRouter } from "react-router-dom"
/* import Header from "./components/Header"
import Main from "./components/Main" */
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Home />
        {/* <Header />
        <Main /> */}
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
