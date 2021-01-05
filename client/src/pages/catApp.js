import React, { Component } from 'react'
import Axios from "axios";
import Footer from "../component/footer";
import "../component/application.css"
import { Button } from '../component/button';

class CatApp extends Component {

    state = {
        catID: " ",
        name: " ",
        email: " ",
        phone: " "
    }

    componentDidMount() {
        this.setState({catID: this.props.match.params.id});
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        Axios.post("/v1/catApp",this.state)
        .then(res => {
            alert("Thank You, Your contact information has been submitted.")
            this.props.history.push(`/adopt`);
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        
        const { catID, name, email, phone } = this.state
        return(
            <>
            <div className="app-container">
            <h1>Cat Application!</h1>
            <br/>
            <p>Please Enter your Name, Email and Phone Number and We Will respond with
            an email confirmation after reviewing your application.
            </p>
            <br/>
    <form onSubmit={this.submitHandler}>
        <div>
            <label>Cat ID</label>
            <input className='app-input' name="catID" value={catID} onChange={this.changeHandler}/>
        </div>
        <div>
            <label>Your Name</label>
            <input className='app-input' name="name" value={name} onChange={this.changeHandler}/>
        </div>
        <div>
            <label>Your Email</label>
            <input className='app-input' name="email" value={email} onChange={this.changeHandler}/>
        </div>
        <div>
            <label>Your Phone Number</label>
            <input className='app-input' name="phone" value={phone} onChange={this.changeHandler}/>
        </div>
        <Button buttonSize='btn--medium' buttonStyle='btn--outline' type="submit">Submit</Button>
    </form>
            </div>
            

    <Footer />
    </>
        )
    }
}

export default CatApp;