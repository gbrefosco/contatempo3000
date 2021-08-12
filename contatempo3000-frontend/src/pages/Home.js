import React, { useState } from 'react';
import { Modal, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import './Home.css';

export default function Home() {
    const date = new Date();

    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 690,
            height: 600,
            backgroundColor: theme.palette.background.paper,
            border: '#7D53D4',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        margin: {
            margin: theme.spacing(1)
        }
    }));

    const [timer, setTimer] = useState(0.00);
    const [running, setRunning] = useState(false);
    const [modalTimeAdd, setModalTimeAdd] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();

    const stopTimer = () => {
        setRunning(false);
    };

    const handleClose = () => {
        setModalTimeAdd(false);
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <TextField id="project" style={{ marginBottom: 8, marginTop: 15 }} fullWidth label="Project" variant="outlined" />
            <TextField id="client" style={{ marginBottom: 8 }} fullWidth label="Client" variant="outlined" />
            <TextField id="start" style={{ marginBottom: 8 }} fullWidth label="Start" variant="outlined" />
            <TextField id="finish" style={{ marginBottom: 8 }} fullWidth label="Finish" variant="outlined" />
            <TextField id="description" style={{ marginBottom: 8, minHeight: 30 }} fullWidth label="Description" variant="outlined" />
            <Button variant="contained" color="primary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleClose}>
                Complete
            </Button>
        </div>
    );

    function getModalStyle() {
        const top = 50;
        const left = 50;

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    return (
        <>
            <div className="actualDate">
                {date.toDateString()}
            </div>

            <button className="btn" id="btnNewTime" onClick={() => setModalTimeAdd(true)}>
                New
            </button>
            <button className="btn" id="btnStartTime" onClick={() => setRunning(true)}>
                Start
            </button>
            <button className="btn" id="btnStopTime" onClick={() => stopTimer}>
                Stop
            </button>
            <button className="btn" id="btnFinishTime" onClick={() => setTimer(0.00)}>
                Finish
            </button>

            <Modal
                open={modalTimeAdd}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </>
    );
}