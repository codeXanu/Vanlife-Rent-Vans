import React from "react";
import {NavLink} from "react-router-dom"
import Logog from "../assets/logog.png"
 

function Header() {
    return(
        <nav className="nav-bar">
            <NavLink to="/" className="home-logo">
                <img src={Logog} alt="VANLIFE" width= "144px" />    
            </NavLink>
            <div>
                <NavLink className={({isActive})=> isActive ? "active-class" : null} to ="/host" >Host</NavLink>
                <NavLink className={({isActive})=> isActive ? "active-class" : null} to ="/about" >About</NavLink>
                <NavLink className={({isActive})=> isActive ? "active-class" : null} to ="/vans" >Vans</NavLink>
            </div>
        </nav>
    )
}


export default Header