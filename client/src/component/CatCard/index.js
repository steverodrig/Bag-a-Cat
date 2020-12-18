import React from "react";
import './Card.css';




function CatCard(props) {

 return (
    <div className="card" style="width: 18rem;">
    <img src={props.image} className="card-img-top" alt={props.name}/>
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.description}</p>
      <a href="details about cat" className="btn btn-primary">Learn More</a>
    </div>
  </div>
  )
}

export default CatCard



