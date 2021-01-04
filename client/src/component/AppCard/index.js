import React from "react";
import "../admin.css"
import API from "../../utils/API";
import { Button } from "../button";


function AppCard(props) {

    function handleApproval() {
        console.log("approved")
    }

    function handleDeny() {
        API.putAdoptedFalse(props.catID)
            .then(console.log("Application Denied"))
            .catch(err => console.log(err))
    }

    

    return (
        <li className= "admin__item">
            <div className="admin__item__info">
                <p className= 'cards__item__text'>Cat ID: {props.catID}</p>
                <p className= 'cards__item__text'>Applicant info:</p>
                <p className= 'cards__item__text'>name - {props.name}</p>
                <p className= 'cards__item__text'>email - {props.email}</p>
                <p className= 'cards__item__text'>phone # - {props.phone}</p>
                <Button buttonStyle='btn--outline' buttonSize='btn--medium' onClick={()=>handleApproval()}>Approve</Button>
                <Button buttonStyle='btn--outline' buttonSize='btn--medium' onClick={()=>handleDeny()}>Deny</Button>
            </div>          
        </li>
    )

}

export default AppCard;