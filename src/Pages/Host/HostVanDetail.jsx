import React from "react"
import { useParams, Link, Outlet, NavLink } from "react-router-dom"
import { getVan } from "../../api"

export default function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setCurrentVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [id])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const vanType = currentVan && currentVan.type.charAt(0).toUpperCase() + currentVan.type.slice(1)
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            {currentVan &&
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`host-van-type ${vanType}`}
                        >
                            {vanType}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                    <NavLink to="." end style={({ isActive }) => isActive ? activeStyles : null} >Details</NavLink>
                    <NavLink to="pricing" style={({ isActive }) => isActive ? activeStyles : null} >Pricing</NavLink>
                    <NavLink to="photos" style={({ isActive }) => isActive ? activeStyles : null} >Photos</NavLink>
                </nav>

                <Outlet  context={currentVan} />
            </div> }
        </section>
    )
}