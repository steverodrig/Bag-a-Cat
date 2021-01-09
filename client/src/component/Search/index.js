import React from "react";
import './application.css'



function Search(props) {

  return (
    <>
      <div>
        <h3 className="headerText">Find Cat</h3>
      </div>
      <div className='cat-application-form'>
        <label>Search: </label>
        <select className='app-input' name="breed" onChange={(e)=>{props.updateCatSearch(e.target.value)}} >
            <option className='app-input' value=" "></option>
            <option className='app-input' value="breed">Search by Breed</option>
            <option className='app-input' value="sex">Search M/F</option>
        </select>
      </div>
    </>
    )
}

export default Search;