import React from 'react';

function Skills() {
    const skillsArray = [
        "React.js", "JavaScript", "Full-Stack Development", "Back-End Web Development", 
        "Software Development", "Front-End Development", "Node.js", "WordPress Development", 
        "Responsive Web Design", "HTML", "SQL", "Data Analysis"
    ];

    return (
        <section className="skills-section box-section">
            <h2>Skills</h2>
            <div className="skills-list">
                {skillsArray.map(skill => (
                    <span key={skill}>{skill}</span>
                ))}
            </div>
        </section>
    );
}

export default Skills;
