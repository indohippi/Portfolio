import React from 'react';
import profilePic1 from '../componentmedia/hwavelogo.png';
import profilePic2 from '../componentmedia/D36DD8F1-C364-41E6-973D-FFF6BF99BF54.jpeg';
import profilePic3 from '../componentmedia/hwavelogo2.png';
import linkedinIcon from '../componentmedia/linkedin.png';
import emailIcon from '../componentmedia/e-mail-12.png';
import githubIcon from '../componentmedia/githubicon.png';

function Header() {
    return (
        <header className="header">
            <div className="header-images">
                <img src={profilePic1} alt="Profile Pic 1" />
                <div className="center-image">
                    <img src={profilePic2} alt="Profile Pic 2" />
                    <div className="header-links">
                        <a href="mailto:jaredwienen@gmail.com">
                            <img src={emailIcon} alt="Email Icon" />
                        </a>
                        <a href="https://linkedin.com/in/jaredwienen" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn Icon" />
                        </a>
                        <a href="https://github.com/indohippi" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub Icon" />
                        </a>
                    </div>
                </div>
                <img src={profilePic3} alt="Profile Pic 3" />
            </div>
            <div className="header-info">
                <h1>Jared Wienen</h1>
                <p>Full-stack Web Developer</p>
                <p>Austin, TX</p>
            </div>
        </header>
    );
}

export default Header;
