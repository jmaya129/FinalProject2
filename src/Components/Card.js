import React from "react";

const Card = (props) => {
  const url = `https://maps.google.com/?ll=${props.data.latitude},${props.data.longitude}`;

  return (
    <div className="card">
      <h1>{props.data.dba}</h1>
      <p>
        <strong>LOCATION: </strong>
        {props.data.address}
      </p>
      <p>
        <a href={url}>
          {props.data.zip_city} {props.data.boroname}, NY {props.data.zipcode}
        </a>
      </p>
    </div>
  );
};

export default Card;
