import React from "react";
import "../Cards.css";
import { Button } from "../button";

function AppCard(props) {

    function handleApproval() {
        console.log("approved")
    }

    function handleDeny() {
        console.log("Denied")
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