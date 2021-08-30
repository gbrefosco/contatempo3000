import React, { useState, useEffect } from 'react';
import { Modal, Button, TextField, makeStyles } from '@material-ui/core';
import api from '../services/api';
import SideNavMenu from '../components/global/sideNav';
import Moment from 'moment';

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

    const [editTime, setEditTime] = useState();

    const [itemsGrid, setItemsGrid] = useState([]);

    const [projects, setProjects] = useState([]);
    
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();

    useEffect(() => {
        api.get('/activity').then(response => setProjects(response.data));
    }, [projects]);

    useEffect(() => {
        api.get('/time')
            .then(res => {
                let newItens = itemsGrid;
                newItens.push(res.data);
                setItemsGrid(newItens);
            });
    }, [itemsGrid]);

    function handleStartChange(value) {
        if (value.length < 16) return;
        let start = Moment(value).unix();
        setEditTime({ ...editTime, start });
    };

    function handleEndChange(value) {
        if (value.length < 16) return;
        let end = Moment(value).unix();
        setEditTime({ ...editTime, end });
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <form className="projectsSelection">
                <label>
                    Select your project:
                    <select onChange={(e) => setEditTime({ ...editTime, activity: e.target.value })}>
                        <option>Selecione uma opção:</option>
                        {projects.map(proj => (
                            <option value={proj.id}>{proj.name}</option>
                        ))}
                    </select>
                </label>
            </form>
            <TextField
                id="start"
                style={{ marginBottom: 8 }}
                fullWidth label="Start"
                variant="outlined"
                placeholder='Formato: dd/mm/aaaa hh:mm'
                onChange={(e) => handleStartChange(e.target.value)} />
            <TextField
                id="finish"
                style={{ marginBottom: 8 }}
                fullWidth label="Finish"
                variant="outlined"
                placeholder='Formato: dd/mm/aaaa hh:mm'
                onChange={(e) => handleEndChange(e.target.value)} />
            {/*
            TODO pós MVP
            <TextField
                id="description"
                multiline rows={7}
                style={{ marginBottom: 8, minHeight: 30 }}
                fullWidth label="Description"
                variant="outlined"
                onChange={() => setEditTime({ ...editTime,  })} /> */}
            <Button variant="contained" onClick={() => handleCloseTimeAdd(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => handleCloseTimeAdd(true)}>Complete</Button>
        </div>
    );

    const handleAddNewTime = () => {
        setModalTimeAdd(true);
    }

    function handleCloseTimeAdd(isSave) {
        if (isSave) {
            let newEditTime = { ...editTime, user:localStorage.getItem('userId')};
            api.post(`/time`, newEditTime)
                .then(res => {debugger})
                .catch(err => {debugger});
        }


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
//                onClose={handleCloseTimeAdd}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </>
    );
}