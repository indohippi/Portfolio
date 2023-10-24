import React from 'react';
import { useAppState } from './AppStateContext';
import Summary from './Summary';
import Skills from './Skills';
import WorkHistory from './WorkHistory';
import Education from './Education';
import Certifications from './Certifications';

function CircularNavbar() {
    const { activeTab, setActiveTab } = useAppState();

    return (
        <div className="wheel-nav" style={{ backgroundImage: 'url(path_to_background_image.png)' }}>
            <div className="circle-nav">
                <button onClick={() => setActiveTab('skills')}>
                    <img src="path_to_skills_icon.png" alt="Skills Icon" />
                    Skills
                </button>
                <button onClick={() => setActiveTab('work-history')}>
                    <img src="path_to_work_icon.png" alt="Work History Icon" />
                    Work History
                </button>
                <button onClick={() => setActiveTab('education')}>
                    <img src="path_to_education_icon.png" alt="Education Icon" />
                    Education
                </button>
                <button onClick={() => setActiveTab('certifications')}>
                    <img src="path_to_certifications_icon.png" alt="Certifications Icon" />
                    Certifications
                </button>
            </div>
            {activeTab === 'summary' && <Summary />}
            {activeTab === 'skills' && <Skills />}
            {activeTab === 'work-history' && <WorkHistory />}
            {activeTab === 'education' && <Education />}
            {activeTab === 'certifications' && <Certifications />}
        </div>
    );
}

export default CircularNavbar;
