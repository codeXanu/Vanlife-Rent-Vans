import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function HostLayout(){
    return(
        <>
        <nav className="host-nav">
            <NavLink  to="/host" end className={({isActive})=> isActive ? "active-class" : null} >Dashboard</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-class" : null} to="/host/income">Income</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-class" : null} to="/host/vans">Vans</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-class" : null} to="/host/reviews">Reviews</NavLink>
        </nav>
            {/* <h1>this is  hostlayout</h1> */}
            <Outlet  />
        </>
    )
}