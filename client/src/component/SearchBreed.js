import React from "react";



function SearchBreed(props) {

  return (
    <>
      <div>
        <h3 className="headerText">Find Cat Breed</h3>
      </div>
      <div>
        <label>Breed: </label>
        <select className='app-input' name="breed" onChange={(e)=>{props.updateCat(e.target.value)}} >
          <option  value="">All Cats</option>
            <option value="Sphynx Cat">Sphynx Cat</option>
            <option value="Ragdoll">Ragdoll</option>
            <option value="Siamese">Siamese</option>
            <option value="Burmese">Burmese</option>
            <option value="Persian">Persian</option>
            <option value="Balinese">Balinese</option>
            <option value="American Wirehair">American Wirehair</option>
            <option value="British Shorthair">British Shorthair</option>
            <option value="Birman">Birman</option>
            <option value="Maine Coon">Maine Coon</option>
            <option value="American Shorthair">American Shorthair</option>
            <option value="Russian Blue">Russian Blue</option>
            <option value="Chartreux">Chartreux</option>
            <option value="Himalayan">Himalayan</option>
        </select>
      </div>
    </>
    )
}

export default SearchBreed;