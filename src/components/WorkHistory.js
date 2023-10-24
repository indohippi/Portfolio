import React from 'react';

function WorkHistory() {
    return (
        <section className="work-history-section">
            <h2>Work History</h2>
            <div className="job">
                <img src="path_to_company_logo_1.png" alt="Company Logo 1" />
                <h3>Software Developer, ABC Corp (2018 - Present)</h3>
                <ul>
                    <li>Developed and maintained web applications using React and Node.js.</li>
                    <li>Collaborated with cross-functional teams to define and implement new features.</li>
                </ul>
            </div>
            <div className="job">
                <img src="path_to_company_logo_2.png" alt="Company Logo 2" />
                <h3>Frontend Developer, DEF Ltd (2016 - 2018)</h3>
                <ul>
                    <li>Designed and implemented user interfaces using HTML, CSS, and JavaScript.</li>
                    <li>Optimized web pages for maximum speed and scalability.</li>
                </ul>
            </div>
            {/* Add more job roles as needed */}
        </section>
    );
}

export default WorkHistory;
