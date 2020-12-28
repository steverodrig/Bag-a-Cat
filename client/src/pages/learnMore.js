
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "../component/learnmore.css"
import Footer from "../component/footer";

function LearnMore(props) {

    const [cat, setCat] = useState([]);

    function loadCat() {
        API.getCatDetails(props.match.params.id)
         .then(res => setCat(res.data))
        .catch(err => console.log(err));
             
    }
    useEffect(() => {
        loadCat()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

// props will need to be updated with actual data from get request
return (
    <div>
  <div className="learn-container">
        <br/>
        <h1>{cat.name}</h1>
        <img alt='cat'src={cat.image} />
        <br/>
        {cat.description}
  </div>

    <Footer />
    </div>
)   
}

export default LearnMore;

