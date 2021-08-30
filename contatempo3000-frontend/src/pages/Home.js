import React, { useState, useEffect } from 'react';
import { Modal, Button, TextField, makeStyles } from '@material-ui/core';
import api from '../services/api';
import SideNavMenu from '../components/global/sideNav';

import * as AiIcons from "react-icons/ai";

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
        }
    }));

    const [modalTimeAdd, setModalTimeAdd] = useState(false);

    const [itemsGrid, setItemsGrid] = useState([]);

    const [projects, setProjects] = useState([]);
    
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();

    useEffect(() => {
        api.get('/activity').then(response => setProjects(response.data));
    }, [projects]);

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <form className="projectsSelection">
                <label>
                    Select your project:
                    <select>
                        {projects.map(proj => (
                            <option value={proj.id}>{proj.name}</option>
                        ))}
                    </select>
                </label>
            </form>
            <TextField id="start" style={{ marginBottom: 8 }} fullWidth label="Start" variant="outlined" />
            <TextField id="finish" style={{ marginBottom: 8 }} fullWidth label="Finish" variant="outlined" />
            <TextField id="description" multiline rows={7} style={{ marginBottom: 8, minHeight: 30 }} fullWidth label="Description" variant="outlined" />
            <Button variant="contained" onClick={handleCloseTimeAdd}>Cancel</Button>
            <Button variant="contained" onClick={handleCloseTimeAdd}>Complete</Button>
        </div>
    );

    const handleAddNewTime = () => {
        setModalTimeAdd(true);
    }

    function handleCloseTimeAdd() {
        setModalTimeAdd(false);
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

    return (
        <>
            <SideNavMenu />
            <div className="actualDate">
                {date.toDateString()}
            </div>

            <button className="btn" id="btnNewTime" onClick={handleAddNewTime}>
                New
            </button>

            <div className="grid">
                {itemsGrid.map(item => (
                    <div className="item">
                    <strong>{item.start} - {item.end}</strong>
                    <strong>{item.activity}</strong>
                    <div className="svgIcon">
                        <AiIcons.AiOutlineEye />
                        <AiIcons.AiOutlineDelete />
                        <AiIcons.AiOutlineEdit />
                    </div>
                </div>
                ))}
            </div>

            <Modal
                open={modalTimeAdd}
                onClose={handleCloseTimeAdd}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </>
    );
}