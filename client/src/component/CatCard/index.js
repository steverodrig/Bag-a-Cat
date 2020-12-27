import React from "react";
import '../Cards.css';
//import learnMore from "./pages/learnMore"
import { Link } from "react-router-dom"
import {  BrowserRouter as Router, Route,} from "react-router-dom";


function CatCard (props) {

 return (
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.name}>
          <img
            className='cards__item__img'
            alt='cat'
            src={"https://picsum.photos/id/1/200/300"}
        />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.name}</h5>
            <Link to={`/learnMore/${props.catID}`} className='btn btn-primary'>
                More info
            </Link>  
            
          </div>
        </Link>
      </li>  
  )
}

export default CatCard;




