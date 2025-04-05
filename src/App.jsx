import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer.jsx"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"


function App() {
  

  return (
    <>
    <div className="main-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      
      </BrowserRouter>               
      <Footer />
    </div>
    </>
  )
}

export default App
