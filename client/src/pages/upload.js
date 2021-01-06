import React, { Component } from "react";
import { Button } from "../component/button";
import "../component/application.css";
import "../component/button.css";
import Axios from "axios";
import $ from 'jquery';


class Upload extends Component {
    
imageHandler = e => {
    e.preventDefault();

    // target the form
    const form = $("#uploadForm")[0];
    // collect all data from the form (text fields AND file inputs)
    const data = new FormData(form);

    $.ajax({
        type: "POST",
        enctype: "multipart/form-data", // IMPORTANT!!!
        url: "/upload",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function(response) {
            // celebrate a bit; the upload succeeded!
            alert("Success!!!")
            
            
            // the back-end sends an object containing the AWS url for the newly-uploaded 
            // file and any additional data sent from the front-end via our AJAX post
            console.log(response);

            // clear out the form fields for next upload
            $("#uploadForm")[0].reset();
        },
        error: function(err) {
            console.log(err);
        }
    });
};

    render() {

        return(
            <>
            {/* the 'enctype' attribute is crucial here! */}
            <form id="uploadForm" encType="multipart/form-data" onSubmit={this.imageHandler}>
                <label htmlFor="description">File Description:</label>
                <input type="text" name="description" placeholder="File Description" id="description" />

                {/* <!-- the name attribute here ('upload') must match the key following 'req.files' in your back-end route! --> */}
                <label htmlFor="upload">Upload File:</label>
                <input type="file" name="upload" id="upload" />

                <input type="submit" value="Upload File" id="submitUpload"></input>
            </form>

        </>
        )
    }
}

export default Upload;