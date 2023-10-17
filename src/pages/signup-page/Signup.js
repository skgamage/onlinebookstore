import React from "react";
import './signup.styles.css';
import AuthBgImg from '../../assets/auth-background.jpg'; 
import Navbar from "../../componants/layouts/navbar/Navbar";
import AuthForm from "../../componants/forms/authform/AuthForm";

const SignUp = () => {
    return (
        <React.Fragment>
            <Navbar />
            <section className="signup-container">
                <div className="signup-img-container">
                    <img src={AuthBgImg} alt="authentication-background" />
                </div>
                <div className="signup-content-container">
                    <div className="container">
                    <div className="content-wrapper">
                        <h2>Signup</h2>
                        <p>Create a new account with email and password.</p>

                       <AuthForm />
                    </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}


export default SignUp;