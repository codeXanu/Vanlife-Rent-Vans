import React, { useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./api";

const AuthContext = React.createContext()

export function AuthProvider({children}) {

    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
                setLoading(false)
            } else {
                console.log("no user found")
                setUser(null);
                setLoading(false)
            }
        })
       
    },[])

    return(
        <AuthContext.Provider value={{user}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


export function useAuth() {
    return useContext(AuthContext)
}