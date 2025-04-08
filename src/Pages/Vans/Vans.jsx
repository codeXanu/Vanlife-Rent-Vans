import React from "react";
import { Link, useSearchParams } from "react-router-dom";

function Vans() {
    const [vans, setVans] = React.useState([]);
    const[searchParams, setSearchParams] = useSearchParams();

    const typeFilter = searchParams.get("type")

    React.useEffect(()=>{
        fetch("/api/vans")
        .then(res=>res.json())
        .then(data=>{
            setVans( data.vans)
        })

    },[] )

    if(!vans.length){ return  ;}

    const displayedVans = typeFilter ? vans.filter((van)=>van.type===typeFilter) : vans 

    const vanElements =  displayedVans.map((van)=>{
        const vanType = van.type.charAt(0).toUpperCase() + van.type.slice(1)
            return (
                <Link to={ `${van.id}`} 
                    state={{search: searchParams.toString() , type: van.type }}
                    aria-label={`View details for ${van.name}, 
                    priced at $${van.price} per day`} 
                    key={van.id} 
                >
                <div  className="van-card">
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
    
    //  to handle filter and remove filter
    function handleFilterChange(key, value){
        setSearchParams(prevParams=>{
            if(value===null){
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        } )
    }


    return(

        <div className="van-main-container">
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={` van-type simple ${typeFilter === "simple" ? "selected" : null} `}
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={` van-type luxury ${typeFilter === "luxury" ? "selected" : null} `}
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={` van-type rugged ${typeFilter === "rugged" ? "selected" : null} `}
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

            </div>
            <h1>Explore our van options</h1>
        <div className="van-content">
          {vanElements} 
        </div>
        </div>
    )
}

export default Vans ;