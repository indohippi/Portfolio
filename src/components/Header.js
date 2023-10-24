import React from 'react';

function Header() {
    return (
        <header className="header-container" style={{ backgroundImage: 'url(path_to_header_background.png)' }}>
            <img src="/Users/jaredwienen/Desktop/my-portfolio/src/componentmedia/D36DD8F1-C364-41E6-973D-FFF6BF99BF54.jpeg" alt="Profile Picture" className="profile-pic" />
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
