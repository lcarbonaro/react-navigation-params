import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ id, name }) {    // taking in props

    const navigate = useNavigate();

    return (
        <div className="myCard" onClick={() => navigate(`/details/${id}`)}>
            <p>
                {id}. {name}
            </p>
        </div>
    );
}

export default Card;
