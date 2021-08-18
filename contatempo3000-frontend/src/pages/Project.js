import React, { useState } from 'react';
import './project.css';
import api from '../services/api';
import * as AiIcons from "react-icons/ai";

export default function Project() {

    const [newProject, setNewProject] = useState('');
    const [project, setProject] = useState([]);

    async function handleAddProject() {
        try {
            const response = await api.get('projects');

            const projects = response.data;

            setProject([...project, projects]);
        } catch (err) {

        }
    }

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