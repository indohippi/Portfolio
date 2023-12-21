import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

function Summary() {
    return (
        <Box sx={{ padding: 2 }}>
            <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h4" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1">
                    {/* Add your summary content here */}
                    I am a full-stack web developer with a passion for creating responsive and user-friendly applications. With a background in both front-end and back-end technologies, I bring a comprehensive approach to web development.
                </Typography>
                {/* Add more paragraphs or content as needed */}
            </Paper>
        </Box>
    );
}

export default Summary;
