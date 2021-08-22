import React, { useState } from 'react';
import { Modal, Button, TextField, makeStyles } from '@material-ui/core';
import './profile.css';
import SideNavMenu from '../components/global/sideNav';

export default function Profile(props) {

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
            <SideNavMenu />
            <div className="prof">
                Your Profile
            </div>

            <div style={{ textAlign: 'center', position: 'absolute', left: '45%', top: '50%' }}>
                <p style={{ color: '#7D53D4', fontSize: '25px' }}>{props.username}</p>
            </div>
            <div className="caixa" style={{ textAlign: 'center' }}>
                <p style={{ color: '#7D53D4', fontSize: '20px' }}>{props.email}</p>
                <button className="editUserMail" onClick={() => setModalAddProjectOrClient(true)}>editar</button>
            </div>
            <div className="caixa" style={{ textAlign: 'center', left: '55%' }}>
                <p style={{ color: '#7D53D4', fontSize: '20px' }}>{props.password}</p>
                <button className="editUserPassword" onClick={() => setModalAddProjectOrClient(true)}>editar</button>
            </div>
            <button className="caixa" style={{ top: '85%' }}>Your Projects</button>
            <button className="caixa" style={{ left: '55%', top: '85%' }}>Your Clients</button>

            <Modal
                open={modalAddProjectOrClient}
                onClose={handleCloseAddProjectOrClient}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {bodyAddProjectOrClient}
            </Modal>
        </>
    );
}