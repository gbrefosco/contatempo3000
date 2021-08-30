import React from 'react';
import './signup.css';

export default function SignUp(){
    return (
        <>
        <div className="titulo">
            <h1 className="title">TascheZeit</h1>
            <h2 className="description">A simple and pratical time-manager <br/> for those who want to be organized</h2>
        </div>

        <div className="PLogin">
                <label className="login_label">Sign Up</label>
                <input className="email_input" type="email" placeholder="Enter a valid email"></input>
                <input className="pass_input" type="password" placeholder="Enter a valid password"></input>
                <input className="login_input" type="text" placeholder="Enter a valid username"></input>

                <button className="continue">Create account</button>

                <p className="logar">
                    Already have an account?
                    <button>Login</button>
                </p>
        </div>

        </>
    );
}