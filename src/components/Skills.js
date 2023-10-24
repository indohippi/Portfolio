import React from 'react';

function Skills() {
    return (
        <section className="skills-section">
            <h2>Skills</h2>
            <div className="skill">
                <img src="path_to_skill_icon_1.png" alt="Skill Icon 1" />
                <span>JavaScript</span>
                <progress value="90" max="100"></progress>
            </div>
            <div className="skill">
                <img src="path_to_skill_icon_2.png" alt="Skill Icon 2" />
                <span>React</span>
                <progress value="85" max="100"></progress>
            </div>
            {/* Add more skills as needed */}
        </section>
    );
}

export default Skills;
