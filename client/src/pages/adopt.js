import React, { useState, useEffect } from "react";
import CatCard from '../component/CatCard';
import API from "../utils/API";

function Adopt() {

    const [cats, setCats] = useState([]);

   console.log(cats);
    
    function loadCats() {
        API.getCats()
        .then(res =>
            setCats(res.data)
             )
             .catch(err => console.log(err));
    }
    
    useEffect(() => {
        loadCats()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

// props will need to be updated with actual data from get request
    return (

        <div className='cards'>
        <h1>Check out these EPIC Kitty Cats!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
            <div>
                {cats.length > 0 ? (
                <div className="container flex-box flex-items">
                {cats.map(cat => {
                return (
                <CatCard 
                CatImage={cat.image}
                 name={cat.name}
                description={cat.description}/>
            );
            })}
        </div>
        ): (
            <h3>No cats available at this time.  Sorry.</h3>
        )}
        </div>
              
            </ul>
          </div>
        </div>
      </div>
    )             

}

export default Adopt;