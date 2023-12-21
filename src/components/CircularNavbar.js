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

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '200px' }}>
                {['skills', 'work-history', 'projects', 'education', 'certifications'].map((tab, index) => (
                    <Button
                        key={index}
                        onClick={() => setActiveTab(tab)}
                        sx={{ padding: 0, marginLeft: index !== 0 ? '10px' : 0 }}
                    >
                        <img src={[skillsIcon, workIcon, projectsIcon, educationIcon, certificationsIcon][index]} alt={`${tab} Icon`} style={iconStyle} />
                    </Button>
                ))}
            </Box>
            <Box>
                {['Skills', 'Work History', 'Projects', 'Education', 'Certifications'].map((label, index) => (
                    <Typography key={index} variant="subtitle2" sx={{ marginTop: '10px' }}>
                        {label}
                    </Typography>
                ))}
            </Box>
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
