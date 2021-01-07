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
        sex: " ",
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
        const { name, breed, description, age, sex } = this.state
        return (
            <>
                <div className="app-container">
                    <p>Enter cat's info below</p>
                    <br></br>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label>Cat's name: </label>
                            <input className='app-input' name="name" value={name} onChange={this.changeHandler} />
                        </div>
                        <div>
                            <label>Breed: </label>
                            {/* <input className='app-input' name="breed" value={breed} onChange={this.changeHandler} /> */}
                            <select class='app-input' name="breed"value={breed} onChange={this.changeHandler} >
                                <option value="Sphynx Cat">Sphynx Cat</option>
                                <option value="Ragdoll">Ragdoll</option>
                                <option value="Siamese">Siamese</option>
                                <option value="Burmese">Burmese</option>
                                <option value="Persian">Persian</option>
                                <option value="Balinese">Balinese</option>
                                <option value="American Wirehair">American Wirehair</option>
                                <option value="British Shorthair">British Shorthair</option>
                                <option value="Birman">Birman</option>
                                <option value="Maine Coon">Maine Coon</option>
                                <option value="American Shorthair">American Shorthair</option>
                                <option value="Russian Blue">Russian Blue</option>
                                <option value="Chartreux">Chartreux</option>
                                <option value="Himalayan">Himalayan</option>
                            </select>
                        </div>
                        <div>
                            <label>Age: </label>
                            <input className='app-input' name="age" value={age} onChange={this.changeHandler} />
                        </div>
                        <div>
                            <label>Sex: </label>
                            {/* <input className='app-input' list="sex" name="sex" value={sex} onChange={this.changeHandler} /> */}
                            <select id="sex" name="sex" value={sex} onChange={this.changeHandler} >
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                        <br></br>
                        <div>
                            <label>Description: </label>
                            <input className='app-input' name="description" value={description} onChange={this.changeHandler} />
                        </div>
                        <div>
                            <form id="uploadForm" encType="multipart/form-data" >
                                <label htmlFor="description">File Description:</label>
                                <input type="text" name="description" placeholder="File Description" id="description" />
                                <label htmlFor="upload">Upload File:</label>
                                <input type="file" name="upload" id="upload" />
                                <Button buttonSize='btn--medium' buttonStyle='btn--outline' onClick={this.imageHandler}>Upload</Button>
                            </form>
                        </div>
                        <Button buttonSize='btn--medium' buttonStyle='btn--outline' type="submit">Submit</Button>
                    </form>
                </div>
                <Footer />
            </>
        )
    }
}

export default Catpost;