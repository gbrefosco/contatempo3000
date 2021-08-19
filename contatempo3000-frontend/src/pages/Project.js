import React, { useState, useEffect } from 'react';
import './project.css';
import api from '../services/api';
import * as AiIcons from "react-icons/ai";

export default function Project() {

    const [newProject, setNewProject] = useState('');
    const [project, setProject] = useState([]);

    async function loadProjects() {
        const prj = await api.get('/activity');

        if (prj.data.length > 0) {
            setProject([prj.data[0]]);
        }
    }

    async function handleAddProject() {
        try {
            const response = await api.post('/activity', {
                name: ''
            });
        } catch (err) {

        }
    }

    useEffect(() => {
        loadProjects();
    });

    return (
        <>
            <form className="formProject">
                <input
                    className="projectName"
                    value={newProject}
                    onChange={e => setNewProject(e.target.value)}
                    placeholder="Enter the project name"
                />
                <button className="submitProject" type="submit" onSubmit={handleAddProject}>Save</button>
            </form>

            <div className="gridProject">
                {project.map(proj => (
                    <div className="itemProject">
                        <strong>{proj.name}</strong>
                        <div className="svgIcon">
                            <AiIcons.AiOutlineEdit />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}