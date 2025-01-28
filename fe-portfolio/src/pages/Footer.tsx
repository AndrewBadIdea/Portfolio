import React from 'react';
import './Footer.css';

import githubIcon from '../images/github.png';
import linkedinIcon from '../images/linkedin.png';
import gmailIcon from '../images/gmail.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* GitHub Link */}
                <a href="https://github.com/AndrewBadIdea" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="footer-icon" />
                </a>
                {/* LinkedIn Link */}
                <a href="https://www.linkedin.com/in/andrew-badea-3021a225a/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
                </a>
                {/* Gmail Link */}
                <a href="mailto:andrewbadea1996@gmail.com">
                    <img src={gmailIcon} alt="Gmail" className="footer-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
