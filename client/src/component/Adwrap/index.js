import React, { useState, useEffect } from "react";
import CatCard from '../CatCard';
import API from "../../utils/API";
import SearchBreed from "../SearchBreed";
import SearchSex from "../SearchSex";


function Adwrap() {

    const [cats, setCats] = useState([]);
    const [selectedCat, setSelectedCat] = useState('');
    const [selectedCatSex, setSelectedCatSex] = useState('');
    
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

     function updateSelectedCat(catName) {
         setSelectedCat(catName)
     }

    function updateSelectedCatSex(catName) {
        setSelectedCatSex(catName)
    }

return (
  <div className='cards'>  
   <h1>Check out these EPIC Kitty Cats!</h1>
    <SearchBreed updateCat={updateSelectedCat}/>
    <SearchSex updateCatSex={updateSelectedCatSex}/>
   <div className='cards__container'>
     <div className='cards__wrapper'>
       
           {cats.length > 0 ? (
               // <>
       <ul className='cards__items'>
        {selectedCat === ''
            ? (cats.map(cat => {
            return ( 
            <CatCard 
            CatImage={cat.image}
            name={cat.name}
            breed={cat.breed}
            age={cat.age}
            description={cat.description}
            catID={cat._id}
            adoptPending={cat.adopted}
            key={cat._id}
            />
        );
        }))
            : (
                cats.filter(cat => cat.breed === selectedCat)
                .map(cat => {
                return ( 
                <CatCard 
                CatImage={cat.image}
                name={cat.name}
                breed={cat.breed}
                age={cat.age}
                description={cat.description}
                catID={cat._id}
                adoptPending={cat.adopted}
                key={cat._id}
                />
            );
            })) 
                
 } 

{selectedCatSex === 'male'||'female'
            ? (
                cats.filter(cat => cat.sex === selectedCatSex)
                .map(cat => {
                return ( 
                <CatCard 
                CatImage={cat.image}
                name={cat.name}
                breed={cat.breed}
                age={cat.age}
                description={cat.description}
                catID={cat._id}
                adoptPending={cat.adopted}
                key={cat._id}
                />
            );
            })) 
        
             : null
            //(
            //     cats.filter(cat => cat.breed === selectedCat)
            //     .map(cat => {
            //     return ( 
            //     <CatCard 
            //     CatImage={cat.image}
            //     name={cat.name}
            //     breed={cat.breed}
            //     age={cat.age}
            //     description={cat.description}
            //     catID={cat._id}
            //     adoptPending={cat.adopted}
            //     key={cat._id}
            //     />
            // );
            // })) 
                
 } 
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

