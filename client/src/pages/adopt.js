import React, { Component } from "react";
import CatCard from '../component/CatCard'

class Adopt extends Component {
    

    state= {
        CatCard
    }

// props will need to be updated with actual data from get request
    render(){
    return (
        <div className="container flex-box flex-items">
            {this.state.CatCard.map(cat => (
             <CatCard 
                CatImage={cat.image}
                name={cat.name}
                description={cat.description}
                detsils={cat.details}/>


            ))}
         </div>
        );
    };

}

export default Adopt;