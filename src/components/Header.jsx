import React from "react";
import {Link, NavLink, useNavigate} from "react-router-dom"
import Logog from "../assets/logog.png"
import loginIcon from "../assets/loginIcon.png"
import { getAuth, signOut } from "firebase/auth";
 

function Header() {
    const navigate = useNavigate();
    function userLogOut() {
        // localStorage.removeItem("loggedin")
        const auth = getAuth()
        signOut(auth).then(()=>{
            console.log("sign out successful");
            setTimeout(() => {
                navigate("/"); 
              }, 10);
        }).catch((error) => {
            console.log(error)
        })
    }
    return(
        <header >
            <NavLink to="/" className="home-logo">
                <img src={Logog} alt="VANLIFE" width= "144px" />    
            </NavLink>
            <div className="navigation">
                <NavLink className={({isActive})=> isActive ? "active-class" : null} to ="/host" >Host</NavLink>
                <NavLink className={({isActive})=> isActive ? "active-class" : null} to ="/about" >About</NavLink>
                <NavLink className={({isActive})=> isActive ? "active-class" : null} to ="/vans" >Vans</NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src={loginIcon} 
                        className="login-icon"
                    />
                </Link>
                <button onClick={userLogOut}>X</button>
            </div>
        </header>
    )
}


export default Header