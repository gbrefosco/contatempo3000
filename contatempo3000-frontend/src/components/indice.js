import React, { useState } from 'react';
import './indice.css';
import Menu from './sidebar.js';

export default function Indice()
{
    const date = new Date()

    return (
        <>
            <div className="actualDate">
                {date.toDateString()}
            </div>

            <button className="btNew"><h2 style={{color:'#fff'}}>New</h2></button>
            <button className="btStart"><h2 style={{color:'#fff'}}>Start</h2></button>
            <button className="btStop"><h2 style={{color:'#fff'}}>Stop</h2></button>
            <button className="btFim"><h2 style={{color:'#fff'}}>Finish</h2></button>
            <p style={{color:'#2A004B',position:'absolute',top:'28%',left:'80%',fontSize:'26px'}}>
                Time:
            </p>
            <Menu />
            <div className="TimeList">

            </div>
        </>
    );
}