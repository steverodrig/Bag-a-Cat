import React, { useState, useEffect } from "react";
import '../Cards.css';
import { Link } from "react-router-dom"

function CatCard(props) {

  const pending = "pending"
  const notPending = "cards__item__pic-wrap"
  const [classNm, setClassNm] = useState([]);

  function appnd() {
    if (props.adoptPending === true) {
      setClassNm(pending.toString())
    } else {setClassNm(notPending.toString())}
  }

  useEffect(() => {
    appnd()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <li className='cards__item'>
      <Link className='cards__item__link' to={props.path}>
        <figure id="kitty" className={`${classNm}`} data-category="Adoption Pending Review">
          <img
            className='cards__item__img'
            alt='cat'
            src={props.CatImage}
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




