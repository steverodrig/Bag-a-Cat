import React from "react";
import "../Cards.css";
import { Button } from "../button";
import API from "../../utils/API";

function AppCard(props) {

    function handleApproval() {
        API.deleteCats(props.catID)
        .then(console.log("Application approved, cat removed"))
        .catch(err => console.log(err))
    }

    function delApp() {
        API.deleteApplication(props.id)
            .then(console.log("Application deleted"))
            .catch(err => console.log(err))
    }

    function handleDeny() {
        API.putAdoptedFalse(props.catID)
            .then(delApp())
            .catch(err => console.log(err))
    }

    return (
        <li>
            <div>
                <p>Cat ID: {props.catID}</p>
                <p>Applicant info:</p>
                <p>name - {props.name}</p>
                <p>email - {props.email}</p>
                <p>phone # - {props.phone}</p>
            </div>
            <Button buttonSize='btn--medium' onClick={()=>handleApproval()}>Approve</Button>
            <Button buttonSize='btn--medium' onClick={()=>handleDeny()}>Deny</Button>
        </li>
    )

}

export default AppCard;