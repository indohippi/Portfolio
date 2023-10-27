import React from 'react';

function Projects() {
    return (
        <div className="projects-container">
            <div className="project-item">
                <h2>Fullstack Academy Capstone</h2>
                <p>
                    A comprehensive e-commerce platform developed as a capstone project during my tenure at Fullstack Academy. This application showcases a seamless integration of front-end and back-end functionalities, offering users a smooth shopping experience. The platform is built using React, ensuring a responsive and dynamic user interface. The back-end operations are efficiently handled, ensuring data integrity and security.
                </p>
                <p><strong>Technologies Used:</strong> React, Fake Store API, JavaScript, CSS, HTML</p>
                <a href="https://acc-capstone-jw.netlify.app/" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>

            <div className="project-item">
                <h2>Python Peppa Pig</h2>
                <p>
                    An engaging game developed to demonstrate foundational knowledge of Python in a gaming environment. The game allows players to navigate in all directions, aiming to catch apples. The scoring mechanism is implemented using Python functions, providing real-time feedback to players. While the game is currently in a developmental phase, its core functionalities can be tested and experienced. The game stands as a testament to the potential of Python in creating interactive and fun gaming experiences.
                </p>
                <p><strong>Technologies Used:</strong> Python</p>
                <a href="https://replit.com/@indohippi/Peppa-Pig" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    );
}

export default Projects;
