import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import profilePic1 from '../componentmedia/hwavelogo2.png';
import profilePic2 from '../componentmedia/D36DD8F1-C364-41E6-973D-FFF6BF99BF54.jpeg';
import profilePic3 from '../componentmedia/hwavelogo2.png';
import glowingCircle from '../componentmedia/tower_of_babel_3078757589.png'; // Updated to relative path

function Header() {
    return (
        <header className="header-container">
            <div className="images-container">
                <div className="image-box">
                    <img src={profilePic1} alt="Profile Picture 1" />
                </div>
                <div className="image-box">
                    <img src={profilePic2} alt="Profile Picture 2" />
                </div>
                <div className="image-box">
                    <img src={profilePic3} alt="Profile Picture 3" />
                </div>
                <div className="glowing-circle-box">
                    <Link to="/projects"> {/* Wrap the image in a Link component */}
                        <img src={glowingCircle} alt="Glowing Circle" />
                    </Link>
                </div>
            </div>
            <h1 className="glow-effect">Jared Wienen</h1>
            <address className="contact-details">
                Austin, United States 78626 <br/>
                Tel: 4305022281 <br/>
                Email: <a href="mailto:jaredwienen@gmail.com">jaredwienen@gmail.com</a> <br/>
                LinkedIn: <a href="https://linkedin.com/in/jaredwienen" target="_blank" rel="noopener noreferrer">linkedin.com/in/jaredwienen</a>
            </address>
            <div className="links-container">
                <a href="https://github.com/indohippi" target="_blank" rel="noopener noreferrer" className="profile-link">GitHub</a> | 
                <a href="https://replit.com/@indohippi" target="_blank" rel="noopener noreferrer" className="profile-link">Repl.it</a> |
                <a href="https://acc-capstone-jw.netlify.app/" target="_blank" rel="noopener noreferrer" className="profile-link">Full Stack Sample</a>
            </div>
        </header>
    );
}

export default Header;
