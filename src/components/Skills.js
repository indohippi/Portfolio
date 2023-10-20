function Skills() {
    const skills = ["React.js", "JavaScript", "..."]; // Add all your skills here

    return (
        <section>
            <h2>Skills</h2>
            <ul>
                {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </section>
    );
}
export default Skills;
