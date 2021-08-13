import React, { useState } from 'react';
import { Modal, Button, TextField, Toolbar, Typography, makeStyles, InputBase, alpha } from '@material-ui/core';

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
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    const [timer, setTimer] = useState(0.00);
    const [running, setRunning] = useState(false);
    const [modalTimeAdd, setModalTimeAdd] = useState(false);
    const [modalProjectOrClientAdd, setModalProjectOrClientAdd] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();

    const stopTimer = () => {
        setRunning(false);
    };

    const handleClose = () => {
        setModalTimeAdd(false);
    }

    const closeAddProjectOrClient = () => {
        setModalProjectOrClientAdd(false)
    }

    function getModalStyle() {
        const top = 50;
        const left = 50;

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const bodyProjectOrClientAdd = (
        <div style={modalStyle} className={classes.paper}>
            <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    Projects
                </Typography>
                <div className={classes.search}>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <Button variant="contained" onClick={closeAddProjectOrClient}>X</Button>
            </Toolbar>
            <div></div>
        </div>
    );

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className="addProject">
                <TextField id="project" style={{ marginBottom: 8, marginTop: 15 }} fullWidth label="Project" variant="outlined" />
                <Button variant="contained" onClick={() => setModalProjectOrClientAdd(true)}>+</Button>
            </div>
            <div className="addClient">
                <TextField id="client" style={{ marginBottom: 8 }} fullWidth label="Client" variant="outlined" />
                <Button variant="contained" onClick={() => setModalProjectOrClientAdd(true)}>+</Button>
            </div>
            <TextField id="start" style={{ marginBottom: 8 }} fullWidth label="Start" variant="outlined" />
            <TextField id="finish" style={{ marginBottom: 8 }} fullWidth label="Finish" variant="outlined" />
            <TextField id="description" style={{ marginBottom: 8, minHeight: 30 }} fullWidth label="Description" variant="outlined" />
            <Button variant="contained" onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={handleClose}>Complete</Button>
        </div>
    );

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
            <button className="btn" id="btnFinishTime" onClick={() => setModalTimeAdd(true)}>
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

            <Modal
                open={modalProjectOrClientAdd}
                onClose={closeAddProjectOrClient}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {bodyProjectOrClientAdd}
            </Modal>
        </>
    );
}