import React, { useContext } from 'react';
import './HomePage.css'; // Custom styles for the homepage
import { LanguageContext } from './LanguageContext';

const HomePage = () => {
    const { translations } = useContext(LanguageContext); // Access translations from context

    return (
        <div className="homepage">
            <div className="content">
                <h1>{translations.homepage.welcome}</h1>
                <p>{translations.homepage.intro}</p>
                <p>{translations.homepage.explore}</p>
                <p>{translations.homepage.reachOut}</p>
                <a
                    href="/AndrewBadeaCV.pdf"
                    download
                    className="btn btn-gold"
                >
                    {translations.homepage.downloadCV}
                </a>
            </div>
        </div>
    );
};

export default HomePage;
