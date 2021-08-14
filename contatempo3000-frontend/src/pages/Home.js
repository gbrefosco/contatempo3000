import React, { useState } from 'react';
import TimeAdd from '../components/modal/timeAdd/timeAdd';

import './Home.css';

export default function Home() {
    const date = new Date();

    const [timer, setTimer] = useState(0.00);
    const [running, setRunning] = useState(false);
    const [modalTimeAdd, setModalTimeAdd] = useState(false);

    const stopTimer = () => {
        setRunning(false);
    };

    const handleAddNewTime = () => {
        setModalTimeAdd(true);
    }

    return (
        <>
            <div className="actualDate">
                {date.toDateString()}
            </div>

            <button className="btn" id="btnNewTime" onClick={handleAddNewTime}>
                New
            </button>
            <button className="btn" id="btnStartTime" onClick={() => setRunning(true)}>
                Start
            </button>
            <button className="btn" id="btnStopTime" onClick={() => stopTimer}>
                Stop
            </button>
            <button className="btn" id="btnFinishTime" onClick={handleAddNewTime}>
                Finish
            </button>

            <div className="gridItems">

            </div>

            <TimeAdd open={modalTimeAdd}/>
        </>
    );
}