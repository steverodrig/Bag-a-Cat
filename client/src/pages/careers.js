import React from 'react'
import { useForm } from "react-hook-form";
import Footer from "../component/footer";
import "../component/careers.css"

function Careers() {

    const { apply, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <>
            <div className="career-container">
                <div className="career-wrapper">
                    <h1>careers with B-A-C</h1>
                    <h3>send us your info!!</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='career-input' type="text" placeholder="Email" name="email" ref={apply} />
                        <input
                            className='career-input'
                            type="password"
                            placeholder="Password"
                            name="password"
                            ref={({ required: "PASSWORD REQUIRED", minLength: { value: 8, message: "TOO SHORT" }})}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                        <input
                            className="career-input"
                            type="resume"
                            placeholder="Resume"
                            name="resume"
                        />
                        <input className="career-input" type="submit" />
                    </form>
                    <p>a member of the B-A-C family will reach out to you</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Careers;
