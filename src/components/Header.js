import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import profilePic2 from '../componentmedia/D36DD8F1-C364-41E6-973D-FFF6BF99BF54.jpeg';
import linkedinIcon from '../componentmedia/linkedin.png';
import emailIcon from '../componentmedia/e-mail-12.png';
import githubIcon from '../componentmedia/githubicon.png';

function Header() {
    return (
        <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: '#2c2c2c', padding: '20px 0' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <img src={profilePic2} alt="Profile Pic 2" style={{ borderRadius: '50%', width: '100px', height: '100px', marginRight: '20px' }} />
                    <Typography variant="h6" sx={{ color: '#b3b3b3', fontSize: '1.5rem' }}>
                        Jared Wienen
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <a href="mailto:jaredwienen@gmail.com">
                        <img src={emailIcon} alt="Email Icon" style={{ width: '30px', height: '30px', margin: '0 15px' }} />
                    </a>
                    <a href="https://linkedin.com/in/jaredwienen" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn Icon" style={{ width: '30px', height: '30px', margin: '0 15px' }} />
                    </a>
                    <a href="https://github.com/indohippi" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub Icon" style={{ width: '30px', height: '30px', margin: '0 15px' }} />
                    </a>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
