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
        <div className="wheel-nav">
            <div className="circle-nav">
                <button onClick={() => setActiveTab('skills')}>Skills</button>
                <button onClick={() => setActiveTab('work-history')}>Work History</button>
                <button onClick={() => setActiveTab('education')}>Education</button>
                <button onClick={() => setActiveTab('certifications')}>Certifications</button>
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
