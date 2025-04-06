import React from "react";
import {useParams} from "react-router-dom"

function VanDetails () {
    const params= useParams()
    const[van, setVan] = React.useState(null)
    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=>res.json())
        .then(data=> setVan(data.vans))
    },[params.id])

    
    return(
        <div className="van-detail-container">
        {van ? (
            <div className="van-detail">
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p className="van-description" >{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        ) : <h2>Loading...</h2>}
    </div>
    )
}

export default VanDetails ;