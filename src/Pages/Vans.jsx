import React from "react";
import { Link } from "react-router-dom";

function Vans() {
    const [vans, setVans] = React.useState([]);
    React.useEffect(()=>{
        fetch("/api/vans")
        .then(res=>res.json())
        .then(data=>{
            setVans( data.vans)
        })

    },[] )

    if(!vans.length){ return  ;}

    const vanElements =  vans.map((van)=>{
        const vanType = van.type.charAt(0).toUpperCase() + van.type.slice(1)
            return (
                <Link to={ `/vans/${van.id}`} aria-label={`View details for ${van.name}, 
                priced at $${van.price} per day`} >
                <div key={van.id} className="van-card">
                    <img src={van.imageUrl} alt={`Image of ${van.name}`} /> 
                    <div className="van-info">
                        <div className="van-info-one">
                            <h3>{van.name}</h3>
                            <p className={vanType} >{vanType} </p>
                        </div>
                        <div className="van-info-two">
                            <h3>$ {van.price}</h3>
                            <p>/day</p>
                        </div>
                    </div>
                </div>
                </Link>
            )
    }   )
    
     
    return(
        <div className="van-content">
          {vanElements} 
        </div>
    )
}

export default Vans ;