import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Details() {
    const navigate = useNavigate();
    const params = useParams();

    return (
        <div className="myCardDetails">
            <p>hello world from id: {params.id}</p>

            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
}

export default Details;
