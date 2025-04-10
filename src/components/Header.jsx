import React from "react";
import {Link, NavLink} from "react-router-dom"
import Logog from "../assets/logog.png"
import loginIcon from "../assets/loginIcon.png"
 

function Header() {
    return(
        <header className="nav-bar">
            <NavLink to="/" className="home-logo">
                <img src={Logog} alt="VANLIFE" width= "144px" />    
            </NavLink>
            <div >
                <NavLink className={({isActive})=> isActive ? "active-class" : null} to ="/host" >Host</NavLink>
                <NavLink className={({isActive})=> isActive ? "active-class" : null} to ="/about" >About</NavLink>
                <NavLink className={({isActive})=> isActive ? "active-class" : null} to ="/vans" >Vans</NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src={loginIcon} 
                        className="login-icon"
                    />
                </Link>
            </div>
        </header>
    )
}


export default Header