import React, { useState, useEffect } from "react";
import CatCard from '../CatCard';
import API from "../../utils/API";


function Adwrap() {

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
       
           {cats.length > 0 ? (
               // <>
       <ul className='cards__items'>
           {cats.map(cat => {
           return (
           <CatCard 
           CatImage={cat.image}
            name={cat.name}
           description={cat.description}
           catID={cat._id}/>
       );
       })}
       </ul>
   // </>
   ): (
       <h3>No cats available at this time.  Sorry.</h3>
   )}
        
     </div>
   </div>
 </div>
   


)   
}

export default Adwrap;

