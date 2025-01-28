import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { LanguageContext } from './LanguageContext';

const Navbar = () => {
    const { language, toggleLanguage, translations } = useContext(LanguageContext); // Access language and translations
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const savedLoginState = localStorage.getItem('isLoggedIn');
        if (savedLoginState === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        const hardcodedUsername = process.env.REACT_APP_USERNAME;
        const hardcodedPassword = process.env.REACT_APP_PASSWORD;

        if (username === hardcodedUsername && password === hardcodedPassword) {
            setIsLoggedIn(true);
            setShowLoginForm(false);
            setError('');
            localStorage.setItem('isLoggedIn', 'true'); // Save login state
        } else {
            setError('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
        localStorage.removeItem('isLoggedIn'); // Clear login state
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">My Portfolio</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/about-me">{translations.aboutMe.title}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">{translations.projects.title}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/comments">{translations.comments.title}</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                    <button
                        className="btn btn-outline-warning me-2"
                        onClick={toggleLanguage}
                    >
                        {language === 'en' ? 'Français' : 'English'}
                    </button>

                    {isLoggedIn ? (
                        <button
                            className="btn btn-outline-danger"
                            onClick={handleLogout}
                        >
                            {translations.auth.logout || 'Log Out'}
                        </button>
                    ) : (
                        <>
                            <button
                                className="btn btn-outline-success"
                                onClick={() => setShowLoginForm(!showLoginForm)}
                            >
                                {translations.auth.login || 'Log In'}
                            </button>
                            {showLoginForm && (
                                <div className="login-form">
                                    <div style={{ marginTop: '10px', textAlign: 'center' }}>
                                        {error && <p style={{ color: 'red' }}>{error}</p>}
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            style={{
                                                padding: '5px',
                                                marginBottom: '5px',
                                                borderRadius: '5px',
                                            }}
                                        />
                                        <br />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            style={{
                                                padding: '5px',
                                                marginBottom: '5px',
                                                borderRadius: '5px',
                                            }}
                                        />
                                        <br />
                                        <button
                                            className="btn btn-sm btn-warning"
                                            onClick={handleLogin}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
