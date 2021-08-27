import React from 'react'
import './login.css';

export default function Login(){
    return (
        <div>
            <div className="titulo">
                <h1 className="title">TascheZeit</h1>
                <h2 className="description">A simple and pratical time-manager <br/> for those who want to be organized</h2>
            </div>
            <div className="PLogin">
                <label className="login_label"><strong>Sing in</strong></label>
                <input className="login_input" type="text" placeholder="Type in your login account"></input>
                <input className="pass_input" type="password" placeholder="Type in your password"></input>
                <a href="www.google.com">Forgot your password?</a>
                
                <button className="continue">Continue</button>

                <p className="signUp">
                    Don't have an account?
                    <a href="/singup">Sign Up</a>
                </p>
            </div>
        </div>
    );
}