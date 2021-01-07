import React from "react";



function SearchSex(props) {

  return (
    <>
      <div>
        <h3 className="headerText">Male/Female</h3>
      </div>
      <div>
        <label>M/F: </label>
        <select className='app-input' name="sex" onChange={(e)=>{props.updateCatSex(e.target.value)}} >
          <option  value="">All Cats</option>
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
      </div>
    </>
    )
}

export default SearchSex;