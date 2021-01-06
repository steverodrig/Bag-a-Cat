import React, { Component } from 'react'
import Axios from "axios";
import Footer from "../component/footer";
import "../component/application.css"
import { Button } from '../component/button';

class Catpost extends Component {

    state = {
        name: " ",
        breed: " ",
        description: " ",
        image: " ",
        age: " ",
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
        Axios.post("/v1/cat/new", this.state)
            .then(res => {
                alert("New adoption card has been submitted.");
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        const { name, breed, description, age, image } = this.state
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
                            <label>Description: </label>
                            <input className='app-input' name="description" value={description} onChange={this.changeHandler} />
                        </div>
                        <div>

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