import React from "react";
import {Link} from "react-router-dom"
import Logog from "./assets/logog.png"
 

function Header() {
    return(
        <nav className="nav-bar">
            <Link to="/" className="home-logo">
                <img src={Logog} alt="VANLIFE" width= "144px" />    
            </Link>
            <div>
                <Link to ="/about" >About</Link>
                <Link to ="/vans" >Vans</Link>
            </div>
        </nav>
    )
}


export default Header