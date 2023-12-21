import React from 'react';
import { useAppState } from './AppStateContext';
import { Box, Button, Typography } from '@mui/material';
import Summary from './Summary';
import Skills from './Skills';
import WorkHistory from './WorkHistory';
import Education from './Education';
import Certifications from './Certifications';
import Projects from './Projects';

import skillsIcon from '../componentmedia/_magic_spell_small_final_fantasy_style_anime_icon_to_represent_skills_884038885.png';
import workIcon from '../componentmedia/ghibli_style_work_job_scroll_anime_icon_to_represent_work_history_651009955.png';
import educationIcon from '../componentmedia/education_books_anime_icon_to_represent_studies_and_school_1255639482.png';
import certificationsIcon from '../componentmedia/education_books_anime_icon_to_represent_studies_and_school_2656161565.png';
import projectsIcon from '../componentmedia/tower_of_babel_3078757589.png';

function CircularNavbar() {
    const { activeTab, setActiveTab } = useAppState();

    const iconStyle = {
        width: '30px',
        height: '30px',
    };

    const tabs = [
        { label: 'Skills', icon: skillsIcon },
        { label: 'Work History', icon: workIcon },
        { label: 'Projects', icon: projectsIcon },
        { label: 'Education', icon: educationIcon },
        { label: 'Certifications', icon: certificationsIcon }
    ];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            {tabs.map((tab, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: index !== 0 ? '20px' : 0 }}>
                    <Button
                        onClick={() => setActiveTab(tab.label.toLowerCase().replace(/\s+/g, '-'))}
                        sx={{ padding: 0 }}
                    >
                        <img src={tab.icon} alt={`${tab.label} Icon`} style={iconStyle} />
                    </Button>
                    <Typography variant="subtitle2" sx={{ marginTop: '10px' }}>
                        {tab.label}
                    </Typography>
                </Box>
            ))}
            {activeTab === 'summary' && <Summary />}
            {activeTab === 'skills' && <Skills />}
            {activeTab === 'work-history' && <WorkHistory />}
            {activeTab === 'education' && <Education />}
            {activeTab === 'certifications' && <Certifications />}
            {activeTab === 'projects' && <Projects />}
        </Box>
    );
}

export default CircularNavbar;
