import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../api"


export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const location = useLocation()
    const navigateTo = useNavigate()
    const redirect = location.state?.from || "/host"

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        // console.log(loginFormData)
        async function loadUser() {
            try{
                const data = await loginUser(loginFormData)
                console.log(data)
                setError(null)
                localStorage.setItem("loggedin", true)
                navigateTo( redirect, { replace: true })
            } catch(err) {
                setError(err)
            } finally {
                setStatus("idle")
            }
            
        }
        loadUser()
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            {location.state?.message && <h2> {location.state.message}</h2> }
            <h1>Sign in to your account</h1>
            {error?.message && <h2>{error.message} </h2> }
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === "submitting"} >
                    {status === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </form>
        </div>
    )

}