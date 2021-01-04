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
        adopted: false
    }

    componentDidMount() {
        this.setState();
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        Axios.post("/v1/cat/new",this.state)
        .then(res => {
            alert("New adoption card has been submitted.");
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {

        const { name, breed, description, image } = this.state
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
                            <input className='app-input' name="breed" value={breed} onChange={this.changeHandler} />
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