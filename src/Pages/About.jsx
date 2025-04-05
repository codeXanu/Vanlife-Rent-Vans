import React from "react";
import { Link } from "react-router-dom";
import Aboutimage from "../assets/Aboutimage.png"


function About() {
    return(
        
        <div className="about-content">
            <img src={Aboutimage} alt="img"/>
            <div className="about-text">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic 
                    of touring the world on 4 wheels.
                </p>
            </div>
            <div className="explore-vans" >
                <h1>Your destination is waiting.<br/> Your van is ready.</h1>
                <Link to="/vans" >
                    <button>Explore our vans</button>
                </Link>
            </div>
        </div>
    )
}


export default About ;