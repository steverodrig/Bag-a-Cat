import React from "react";



function Search(props) {

  return (
    <>
      <div>
        <h3 className="headerText">Find Cat</h3>
      </div>
      <div>
        <label>Search: </label>
        <select className='app-input' name="breed" onChange={(e)=>{props.updateCatSearch(e.target.value)}} >
            <option value=" "></option>
            <option value="breed">Search by Breed</option>
            <option value="sex">Search M/F</option>
        </select>
      </div>
    </>
    )
}

export default Search;