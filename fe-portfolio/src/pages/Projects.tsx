import React, { useContext, useState, useEffect } from 'react';
import './Projects.css';
import { LanguageContext } from './LanguageContext';

const initialProjects = [
    { description: 'An open-source web app for managing tasks.', link: 'https://github.com/yourusername/project1' },
    { description: 'A game engine built in C++.', link: 'https://github.com/yourusername/project2' },
    { description: 'A portfolio website built with React.', link: 'https://github.com/yourusername/portfolio' },
    { description: 'A machine learning project for image recognition.', link: 'https://github.com/yourusername/ml-project' },
];

const Projects = () => {
    const { translations } = useContext(LanguageContext); // Access translations
    const [projects, setProjects] = useState(initialProjects);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [newDescription, setNewDescription] = useState('');
    const [newLink, setNewLink] = useState('');

    const openModal = () => setShowModal(true);
    const closeModal = () => {
        setShowModal(false);
        setNewDescription('');
        setNewLink('');
    };

    useEffect(() => {
        const savedLoginState = localStorage.getItem('isLoggedIn');
        if (savedLoginState === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <div className="container projects-container">
            <h1 className="text-center">{translations.projects.title}</h1>
            <div className="row">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-4 col-lg-3 mb-4">
                        <div className="card project-card">
                            <div className="card-body">
                                <p className="card-text">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    {translations.projects.viewProject}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isLoggedIn && (
                <div className="text-center mt-4">
                    <button className="btn btn-primary mt-3" onClick={openModal}>
                        Add a Project
                    </button>
                </div>
            )}
            {showModal && (
                <div className="modal-backdrop">
                    <div className="modal-container">
                        <h2>Add a Project</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="description">Project Description</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    rows={3}
                                    placeholder="Enter project description"
                                    value={newDescription}
                                    onChange={(e) => setNewDescription(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="link">Project Link</label>
                                <input
                                    type="url"
                                    className="form-control"
                                    id="link"
                                    placeholder="Enter project link"
                                    value={newLink}
                                    onChange={(e) => setNewLink(e.target.value)}
                                />
                            </div>
                            <div className="modal-actions">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                    Cancel
                                </button>
                                {/* Submit logic will be handled in the backend */}
                                <button type="button" className="btn btn-primary" disabled>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
