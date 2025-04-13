import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function AuthRequired() {
    const {user} = useAuth()
    const location = useLocation()
    if(!user){
        return(
            <Navigate to="/login" 
            state={{
                message: "You must login first",
                from: location.pathname
            }}   
            replace
            />
        )
    }
   
        return <Outlet />
        
}