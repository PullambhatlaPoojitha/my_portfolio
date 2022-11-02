import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({emoji, heading, detail, github,color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href={github}><button className="c-button">SHOW PROJECT</button></a>
    </div>
  );
};

export default Card;
