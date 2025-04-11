import React from "react";
import {useParams, Link, useLocation} from "react-router-dom"
import { getVans } from "../../api";

function VanDetails () {
    const params= useParams()
    const location = useLocation()
    // console.log(location.state.type)
    const[van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(()=>{
       async function loadVans() {
        setLoading(true)
        try{
            const data = await getVans(params.id)
            setVan(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
       }
       loadVans()
    },[params.id])

    if (loading){
        return <h1>Loading ...</h1>
    }
    if(error) {
        return <h2>There was an error: {error.message}</h2>
    }

    
    const search = location.state?.search ||  ""
    const type = location.state?.type || "all"
    
    return(
        <div className="van-detail-container">
              <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>

        {van && (
            <div className="van-detail">
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p className="van-description" >{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        )}
    </div>
    )
}

export default VanDetails ;