import React from "react";
import { Link } from "react-router-dom";

function Card({ id, name }) {    // taking in props

    //const navigate = useNavigate();  // not allowed ?!?
    /*
    return (
        <div className="myCard" onClick={() => navigate(`/details/${id}`)}>
            <p>
                {id}. {name}
            </p>
        </div>
    );
    */

    return (
        <Link to={`/details/${id}`}>
            <div className="myCard" >
                <p>
                    {id}. {name}
                </p>
            </div>
        </Link>
    );


}

export default Card;
