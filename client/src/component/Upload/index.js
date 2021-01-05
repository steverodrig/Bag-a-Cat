import React from "react";

function Upload() {

    $("#submitUpload").on("click", function (event) {
        event.preventDefault();
    
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
                alert("Success!!!");
                
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
    });
}

export default Upload;