import React, { useState } from 'react';
import './Home.css';

export default function Home() {
    const date = new Date();

    const [timer, setTimer] = useState(0.00);
    const [running, setRunning] = useState(false);

    const stopTimer = () => {
        setRunning(false);
    };

    function openNewTime() {}

    return (
        <>
            <div className="actualDate">
                {date.toDateString()}
            </div>

            <button className="btn" id="btnNewTime" onClick={() => openNewTime()}>
                New
            </button>
            <button className="btn" id="btnStartTime" onClick={() => setRunning(true)}>
                Start
            </button>
            <button className="btn" id="btnStopTime" onClick={() => stopTimer()}>
                Stop
            </button>
            <button className="btn" id="btnFinishTime" onClick={() => setTimer(0.00)}>
                Finish
            </button>
        </>
    );
}