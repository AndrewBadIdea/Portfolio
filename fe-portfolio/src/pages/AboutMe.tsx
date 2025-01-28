import React, { useContext } from 'react';
import './AboutMe.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bouldImg from '../images/bould.jpg';
import programmingImg from '../images/programming.png';
import meImg from '../images/me.jpg';
import { LanguageContext } from './LanguageContext';

const AboutMe = () => {
    const { translations } = useContext(LanguageContext); // Access translations

    return (
        <div className="about-me">
            <div id="aboutMeCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {/* About Me Section */}
                    <div className="carousel-item active">
                        <div className="carousel-content">
                            <h2>{translations.aboutMe.title}</h2>
                            <p>{translations.aboutMe.section1}</p>
                            <img src={meImg} alt="Andrew Badea" />
                        </div>
                    </div>

                    {/* Professional Experience Section */}
                    <div className="carousel-item">
                        <div className="carousel-content">
                            <p>{translations.aboutMe.section2}</p>
                            <img src={programmingImg} alt="Programming" />
                        </div>
                    </div>

                    {/* Hobbies Section */}
                    <div className="carousel-item">
                        <div className="carousel-content">
                            <h2>{translations.aboutMe.title}</h2>
                            <p>Travel and experiences.</p>
                            <img src={bouldImg} alt="Bouldering" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
