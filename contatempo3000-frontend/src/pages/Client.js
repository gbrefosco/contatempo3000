import React, { useState } from 'react';
import './project.css';
import api from '../services/api';
import * as AiIcons from "react-icons/ai";

export default function Client() {

    const [newClient, setNewClient] = useState('');
    const [client, setClient] = useState([]);

    async function handleAddClient() {
        try {
            const response = await api.get('clients');

            const clients = response.data;

            setClient([...client, clients]);
        } catch (err) {

        }
    }

    return (
        <>
            <form className="formClient">
                <input
                    className="clientName"
                    value={newClient}
                    onChange={e => setNewClient(e.target.value)}
                    placeholder="Enter the client name"
                />
                <button className="submitClient" type="submit" onSubmit={handleAddClient}>Save</button>
            </form>

            <div className="gridClient">
                {client.map(cli => (
                    <div className="itemClient">
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