import React from "react";
import { Link, useParams } from "react-router-dom";

function Details() {
    //const navigate = useNavigate();  // not allowed !?!
    /*
    return (
        <div className="myCardDetails">
            <p>hello world from id: {params.id}</p>

            <button onClick={() => navigate(-1)}>Go Back</button>

        </div>
    );
    */

    const params = useParams();
    
    return (
        <div className="myCardDetails">
            <p>hello world from id: {params.id}</p>

            <Link to="/">
                <button >Go Back</button>
            </Link>
            
        </div>
    );

}

export default Details;
