import React, { useState, useEffect } from 'react';
import './project.css';
import api from '../services/api';
import * as AiIcons from "react-icons/ai";

export default function Client() {

    const [newClient, setNewClient] = useState('');
    const [client, setClient] = useState([]);

    function handleAddClient(e) {
        e.preventDefault();

        if (newClient) {
            api.post('/client', {
                name: newClient
            });

            setNewClient('');
        }
    }

    useEffect(() => {
        api.get('/client')
            .then(response => {
                setClient(response.data);
            });
    }, [client]);

    return (
        <>
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
                            <AiIcons.AiOutlineEdit />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}