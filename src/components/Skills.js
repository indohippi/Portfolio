import React from 'react';

function Skills() {
    const skillsArray = [
        "React.js", "JavaScript", "Full-Stack Development", "Back-End Web Development", 
        "Software Development", "Front-End Development", "Node.js", "WordPress Development", 
        "Responsive Web Design", "HTML", "SQL", "Data Analysis"
    ];

    return (
        <section className="education-section" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '100%' }}>
            <h2>Skills</h2>
            <div className="education-item">
                {skillsArray.map(skill => (
                    <p key={skill}>{skill}</p>
                ))}
            </div>
        </section>
    );
}


export default Skills;
