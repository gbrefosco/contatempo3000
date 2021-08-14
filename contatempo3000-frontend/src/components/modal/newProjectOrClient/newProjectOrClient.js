import React, { useState } from 'react';
import { Modal, Button, TextField, makeStyles } from '@material-ui/core';

export default function NewProjectOrClient(props) {
    const useStyles = makeStyles((theme) => ({
        addProjectOrClient: {
            position: 'absolute',
            width: 690,
            height: 200,
            backgroundColor: theme.palette.background.default,
            border: '#7D53D4',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        }
    }));

    const [modalAddProjectOrClient, setModalAddProjectOrClient] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();

    const handleCloseAddProjectOrClient = () => {
        setModalAddProjectOrClient(false);
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

    const bodyAddProjectOrClient = (
        <div style={modalStyle} className={classes.addProjectOrClient}>
            <TextField id="name" style={{ marginBottom: 8, marginTop: 15 }} fullWidth label="Name" variant="outlined" />
            <Button variant="contained" onClick={handleCloseAddProjectOrClient}>Cancel</Button>
            <Button variant="contained" onClick={handleCloseAddProjectOrClient}>Save</Button>
        </div>
    );

    return (
        <>
            <Modal
                open={props.open}
                onClose={handleCloseAddProjectOrClient}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {bodyAddProjectOrClient}
            </Modal>
        </>
    );
}