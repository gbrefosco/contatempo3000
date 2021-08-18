import React, { useState } from 'react';
import { Modal, Button, TextField, makeStyles } from '@material-ui/core';
import ProjectOrClientAdd from '../projectOrClientAdd/projectOrClientAdd';
import { Dropdown } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'

export default function TimeAdd(props) {

    const projects = [
        { key: '1', text: 'projeto teste 1', value: 'projeto teste 1' },
        { key: '2', text: 'projeto teste 2', value: 'projeto teste 2' },
        { key: '3', text: 'projeto teste 3', value: 'projeto teste 3' },
        { key: '4', text: 'projeto teste 4', value: 'projeto teste 4' }
    ];

    const clients = [
        { key: '1', text: 'projeto teste 1', value: 'projeto teste 1' },
        { key: '2', text: 'projeto teste 2', value: 'projeto teste 2' },
        { key: '3', text: 'projeto teste 3', value: 'projeto teste 3' },
        { key: '4', text: 'projeto teste 4', value: 'projeto teste 4' }
    ];

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
            <Dropdown placeholder='Select Project'
                fluid
                search
                selection
                options={projects}
            />
            <Dropdown placeholder='Select Client'
                fluid
                search
                selection
                options={clients}
            />
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