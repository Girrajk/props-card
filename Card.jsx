import React from "react";

const Card = ({ img, name, description, read }) => {
    return (
        <div className="card">
            <img src={img} alt="not found..." />
            <h1>{name}</h1>
            <p>{description}</p>
            <a href="{read}">Read More</a>
        </div>
    );
};
export default Card;