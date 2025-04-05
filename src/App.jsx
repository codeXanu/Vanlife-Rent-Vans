import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer.jsx"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Vans from "./Pages/Vans.jsx"

import "./server.js"
import VanDetails from "./Pages/VanDetails.jsx"



function App() {


  return (
    <>
    <div className="main-container">
      <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Routes>
      
      </BrowserRouter>  
      </main>             
      <Footer />
    </div>
    </>
  )
}

export default App
