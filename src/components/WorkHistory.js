import React from 'react';

function WorkHistory() {
    return (
        <section className="education-section" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h2>Work History</h2>
            <div className="education-item">
                <h3>Logistics Scheduler</h3>
                <p>Amazon – Austin, TX</p>
                <p>07/2022 - Current</p>
                <ul>
                    <li>Completed logs and reports detailing production data such as volume, materials used, and quality assurance results.</li>
                    <li>Managed data and correspondence to secure information across complex landscapes of organizational departments.</li>
                    <li>Programmed browser utilities for simplification of routing processes.</li>
                </ul>
            </div>
            <div className="education-item">
                <h3>Fiber Specialist</h3>
                <p>OneSupport – Austin, TX</p>
                <p>10/2018 - 08/2022</p>
                <ul>
                    <li>Diagnosed and resolved complex integrated customer issues.</li>
                    <li>Identified causes of issues within applications and determined modifications.</li>
                </ul>
            </div>
            <div className="education-item">
                <h3>Inventory Analyst</h3>
                <p>Schneider Electric – Athens, TX</p>
                <p>12/2015 - 03/2017</p>
                <ul>
                    <li>Improved forecasting systems for materials and supplies.</li>
                    <li>Managed logistic suppliers for optimum cost and quality.</li>
                </ul>
            </div>
            <div className="education-item">
                <h3>Industrial Electrician and Pipeline</h3>
                <p>Johnny Ray Clements I&E – Mabank, TX</p>
                <p>06/2008 - 08/2015</p>
                <ul>
                    <li>Handled electrical wiring, controls, and lighting systems.</li>
                </ul>
            </div>
        </section>
    );
}

export default WorkHistory;
