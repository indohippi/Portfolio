import React from 'react';
import { useAppState } from './AppStateContext';
import Summary from './Summary';
import Skills from './Skills';
import WorkHistory from './WorkHistory';
import Education from './Education';
import Certifications from './Certifications';

// Importing the images
import skillsIcon from '../componentmedia/_magic_spell_small_final_fantasy_style_anime_icon_to_represent_skills_884038885.png';
import workIcon from '../componentmedia/ghibli_style_work_job_scroll_anime_icon_to_represent_work_history_651009955.png';
import educationIcon from '../componentmedia/education_books_anime_icon_to_represent_studies_and_school_1255639482.png';
import certificationsIcon from '../componentmedia/education_books_anime_icon_to_represent_studies_and_school_2656161565.png';


function CircularNavbar() {
    const { activeTab, setActiveTab } = useAppState();

    return (
        <div className="wheel-nav" style={{ backgroundImage: 'url(path_to_background_image.png)' }}>
            <div className="circle-nav">
                <div className="nav-item">
                    <img src={skillsIcon} alt="Skills Icon" />
                    <button onClick={() => setActiveTab('skills')}>Skills</button>
                </div>
                <div className="nav-item">
                    <img src={workIcon} alt="Work History Icon" />
                    <button onClick={() => setActiveTab('work-history')}>Work History</button>
                </div>
                <div className="nav-item">
                    <img src={educationIcon} alt="Education Icon" />
                    <button onClick={() => setActiveTab('education')}>Education</button>
                </div>
                <div className="nav-item">
                    <img src={certificationsIcon} alt="Certifications Icon" />
                    <button onClick={() => setActiveTab('certifications')}>Certifications</button>
                </div>
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
