import React from 'react';
import './profile.css';
//import Menu from './sidebar.js';

export default function Profile(props){
    return(
        <>
            <div className="prof">
                Your Profile
            </div>
            <img src="../assets/ladrao.png" className="picture"/>
            <h1>
                {props.username} {props.email} {props.password}
            </h1>
        </>
    );
}