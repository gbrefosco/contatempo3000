import React, { useState } from 'react';
import { Modal, Button, TextField, makeStyles } from '@material-ui/core';
import ProjectOrClientAdd from '../projectOrClientAdd/projectOrClientAdd';

export default function TimeAdd(props) {

    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 690,
            height: 600,
            backgroundColor: theme.palette.background.paper,
            border: '#7D53D4',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        }
    }));

    const [modalTimeAdd, setModalTimeAdd] = useState(false);
    const [modalProjectOrClientAdd, setModalProjectOrClientAdd] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();

    const handleClose = () => {
        setModalTimeAdd(false);
    }

    const openProjectOrClient = () => {
        setModalProjectOrClientAdd(true);
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

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className="addProject">
                <TextField id="project" style={{ marginBottom: 8, marginTop: 15 }} fullWidth label="Project" variant="outlined" />
                <Button variant="contained" onClick={() => { setModalProjectOrClientAdd(true) }}>+</Button>
            </div>
            <div className="addClient">
                <TextField id="client" style={{ marginBottom: 8 }} fullWidth label="Client" variant="outlined" />
                <Button variant="contained" onClick={() => { setModalProjectOrClientAdd(true) } }>+</Button>
            </div>
            <TextField id="start" style={{ marginBottom: 8 }} fullWidth label="Start" variant="outlined" />
            <TextField id="finish" style={{ marginBottom: 8 }} fullWidth label="Finish" variant="outlined" />
            <TextField id="description" multiline rows={7} style={{ marginBottom: 8, minHeight: 30 }} fullWidth label="Description" variant="outlined" />
            <Button variant="contained" onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={handleClose}>Complete</Button>
        </div>
    );

    return (
        <>
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>

            <ProjectOrClientAdd open={modalProjectOrClientAdd} />
        </>
    );
}