import React, { useState } from 'react';
import { Modal, Button, Toolbar, Typography, makeStyles, InputBase } from '@material-ui/core';
import NewProjectOrClient from '../newProjectOrClient/newProjectOrClient';

export default function ProjectOrClientAdd(props) {

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
        deleteProjectOrClient: {
            position: 'absolute',
            width: 500,
            height: 200,
            backgroundColor: theme.palette.background.default,
            border: '#7D53D4',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        }
    }));
    
    const [modalProjectOrClientAdd, setModalProjectOrClientAdd] = useState(false);
    const [modalAddProjectOrClient, setModalAddProjectOrClient] = useState(false);
    const [modalDeleteProjectOrClient, setModalDeleteProjectOrClient] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();

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
                <Button variant="contained" onClick={() => setModalAddProjectOrClient(true)}>+</Button>
                <Button variant="contained" onClick={() => setModalProjectOrClientAdd(false)}>X</Button>
            </Toolbar>
            <div className="bodyListItems">
                <div className="itemList">
                    <div className="itemName">Item teste</div>
                    <div className="iconsEditOrDelete">
                        <Button variant="contained" onClick={() => setModalAddProjectOrClient(true)}>edit</Button>
                        <Button variant="contained" onClick={() => setModalDeleteProjectOrClient(true)}>delete</Button>
                    </div>
                </div>
            </div>
        </div>
    );

    const bodyDeleteProjectOrClient = (
        <div style={modalStyle} className={classes.deleteProjectOrClient}>
            <p>Do you want to delete this project/client?</p>
            <Button variant="contained" onClick={handleCloseDeleteProjectOrClient}>No</Button>
            <Button variant="contained" onClick={handleCloseDeleteProjectOrClient}>Yes</Button>
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

    function closeAddProjectOrClient() {
        setModalProjectOrClientAdd(false);
    }

    function handleCloseDeleteProjectOrClient() {
        setModalDeleteProjectOrClient(false);
    }

    return (
        <>
            <Modal
                open={props.open}
                onClose={closeAddProjectOrClient}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {bodyProjectOrClientAdd}
            </Modal>

            <Modal
                open={modalDeleteProjectOrClient}
                onClose={handleCloseDeleteProjectOrClient}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {bodyDeleteProjectOrClient}
            </Modal>

            <NewProjectOrClient open={modalAddProjectOrClient} />
        </>
    );

}