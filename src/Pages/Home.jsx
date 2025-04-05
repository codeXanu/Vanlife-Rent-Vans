import React from "react"; 
import { Link } from "react-router-dom";

function Home() {
    return(
        <div className="home-content">
            <div className="home-text">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="/vans" className="home-text-button">
                    <button>Find your Van</button>
                </Link>
            </div>
        </div>
    )
}

export default Home ;