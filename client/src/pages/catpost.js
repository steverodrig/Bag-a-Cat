import React, { Component } from 'react'
import Footer from "../component/footer";
import API from "../utils/API";
import "../component/application.css"
import { Button } from '../component/button';
import $ from 'jquery';

class Catpost extends Component {

    state = {
        name: " ",
        breed: " ",
        age: " ",
        image: "holder",
        description: " ",
        adopted: false
    }

    componentDidMount() {
        this.setState();
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        API.postCats(this.state)
            .then(res => {
                alert("New adoption card has been submitted.")
                this.props.history.push(`/admin`);
            })
            .catch(err => {
                console.log(err)
            })
    }

    imageHandler = e => {
        e.preventDefault()


        const form = $("#uploadForm")[0];
        const data = new FormData(form);

        $.ajax({
            type: "POST",
            enctype: "multipart/form-data",
            url: "/upload",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (response) {
                alert("Image uploaded successfully")
                console.log(response);
                $("#uploadForm")[0].reset();
            },
            error: function (err) {
                console.log(err);
            }
        });
    };

    render() {
        const { name, breed, description, age } = this.state
        return (
            <>
                <div className="app-container">
                    <h3>Enter cat's info below</h3>
                    <div className='app-wrapper'>
                    <form className='app-items' onSubmit={this.submitHandler}>
                        <div>
                            <label>Cat's name: </label>
                            <input className='app-input' name="name" value={name} onChange={this.changeHandler} />
                        </div>
                        <div>
                            <label>Breed: </label>
                            <input className='app-input' name="breed" value={breed} onChange={this.changeHandler} />
                        </div>
                        <div>
                            <label>Age: </label>
                            <input className='app-input' name="age" value={age} onChange={this.changeHandler} />
                        </div>
                        <div>
                            <label>Description: </label>
                            <input className='app-input' name="description" value={description} onChange={this.changeHandler} />
                        </div>
                        <div>
                            <form  id="uploadForm" encType="multipart/form-data" >
                                <div className='file-description'>
                                <label  htmlFor="description">File Description:</label>
                                <input  className='app-input' type="text" name="description" placeholder="File Description" id="description" />
                                </div>
                                <div className='upload-file'>
                                <label  htmlFor="upload">Upload File:</label>                                
                                <input className='choose-file' type="file" name="upload" id="upload" />
                                </div>                               
                                </form>
                               </div>
                               <div className='upload-button'>
                               <Button buttonSize='btn--medium' buttonStyle='btn--outline' onClick={this.imageHandler}>Upload</Button>   
                               </div>
                                <div className='submit-button'>
                                <Button buttonSize='btn--medium' buttonStyle='btn--outline' type="submit">Submit</Button>   
                                </div>
                              
                    </form>

                    </div>
                    
                </div>
                <Footer />
            </>
        )
    }
}

export default Catpost;