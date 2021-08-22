import React, { useState, useEffect } from 'react';
import './project.css';
import api from '../services/api';
import { Modal, Button, makeStyles } from '@material-ui/core';
import * as AiIcons from "react-icons/ai";
import SideNavMenu from '../components/global/sideNav';

export default function Client() {

    const useStyles = makeStyles((theme) => ({
        addClient: {
            position: 'absolute',
            width: 690,
            height: 200,
            backgroundColor: theme.palette.background.default,
            border: '#7D53D4',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        deleteClient: {
            position: 'absolute',
            width: 500,
            height: 200,
            backgroundColor: theme.palette.background.default,
            border: '#7D53D4',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        }
    }));

    const [newClient, setNewClient] = useState('');
    const [client, setClient] = useState([]);

    const [editClient, setEditClient] = useState([]);
    const [newEditClient, setNewEditClient] = useState('');
    const [modalAddClient, setModalAddClient] = useState(false);

    const [modalDeleteClient, setModalDeleteClient] = useState(false);
    const [deleteClient, setDeleteClient] = useState(null);

    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();

    const bodyAddClient = (
        <div style={modalStyle} className={classes.addClient}>
            <input className="editClientName"
                value={editClient[1]}
                placeholder="Enter the new Client name" />
            <Button variant="contained" onClick={handleCloseAddClient}>Cancel</Button>
            <Button variant="contained" onClick={handleCloseAddClient}>Save</Button>
        </div>
    );

    const bodyDeleteClient = (
        <div style={modalStyle} className={classes.deleteClient}>
            <p>Do you want to delete this Client?</p>
            <Button variant="contained" onClick={handleCloseDeleteClient}>No</Button>
            <Button variant="contained" onClick={() => {
                console.log(deleteClient);
                const response = api.delete('/client', {
                    id: deleteClient
                });

                setModalDeleteClient(false);
            }}>Yes</Button>
        </div>
    );

    function handleCloseAddClient() {
        setModalAddClient(false);
    }

    function handleCloseDeleteClient() {
        setModalDeleteClient(false);
    }

    function handleAddClient(e) {
        e.preventDefault();

        if (newClient) {
            api.post('/client', {
                name: newClient
            });

            setNewClient('');
        }
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

    useEffect(() => {
        api.get('/client')
            .then(response => {
                setClient(response.data);
            });
    }, [client]);

    return (
        <>
            <SideNavMenu />
            <form className="formClient" onSubmit={handleAddClient}>
                <input
                    className="clientName"
                    value={newClient}
                    onChange={e => setNewClient(e.target.value)}
                    placeholder="Enter the client name"
                />
                <button className="submitClient" type="submit">Save</button>
            </form>

            <div className="gridClient">
                {client.map(cli => (
                    <div className="itemClient" key={cli.id}>
                        <strong>{cli.name}</strong>
                        <div className="svgIcon">
                        <AiIcons.AiOutlineDelete onClick={() => {
                                setModalDeleteClient(true);
                                setDeleteClient(cli.id);
                            }} />
                            <AiIcons.AiOutlineEdit onClick={() => {
                                setModalAddClient(true);
                                setEditClient([cli.id, cli.name]);
                            }} />
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                open={modalAddClient}
                onClose={handleCloseAddClient}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {bodyAddClient}
            </Modal>

            <Modal
                open={modalDeleteClient}
                onClose={handleCloseDeleteClient}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {bodyDeleteClient}
            </Modal>
        </>
    );
}