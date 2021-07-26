import React, { useState } from 'react';
import './Home.css';

export default function Home() {
    const date = new Date();

    const [timer, setTimer] = useState(0.00);
    const [running, setRunning] = useState(false);

    const stopTimer = () => {
        setRunning(false);
    };

    return (
        <>
            <div className="actualDate">
                {date.toDateString()}
            </div>

            <button className="btNew">
                <h2 style={{ color: '#fff' }}>New</h2>
            </button>
            <button className="btStart" onClick={() => setRunning(true)}>
                <h2 style={{ color: '#fff' }}>Start</h2>
            </button>
            <button className="btStop" onClick={() => stopTimer()}>
                <h2 style={{ color: '#fff' }}>Stop</h2>
            </button>
            <button className="btFim" onClick={() => setTimer(0.00)}>
                <h2 style={{ color: '#fff' }}>Finish</h2>
            </button>
            <p style={{ color: '#2A004B', position: 'absolute', top: '28%', left: '80%', fontSize: '26px' }}>
                Time: {timer}
            </p>

        </>
    );
}