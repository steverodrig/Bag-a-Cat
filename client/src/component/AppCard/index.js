import React from "react";
import "../Cards.css";

function AppCard(props) {

    return (
        <li>
            <div>
                <p>{props.catID}</p>
                <p>{props.name}</p>
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </div>
        </li>
    )

}

export default AppCard;