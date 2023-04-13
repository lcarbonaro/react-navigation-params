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

  const hdgData = ["Detail", "Value"];
  const rowData = [
    {
      name: "City",
      value: "Mississauga",
    },
    {
      name: "Age",
      value: 23,
    },
  ];

  return (
    <div className="myCardDetails">
      <p>hello world from id: {params.id}</p>

      <table>
        <thead>
          <tr>
            {hdgData.map((h, i) => {
              return <th key={i}>{h}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rowData.map((r, i) => {
            return (
              <tr key={i}>
                <td>{r.name}</td>
                <td>{r.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default Details;
