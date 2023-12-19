import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, Container, Box } from '@mui/material';

// Import the individual components
import { AppStateProvider } from './components/AppStateContext';
import Header from './components/Header';
import CircularNavbar from './components/CircularNavbar';
import Footer from './components/Footer';
import hashiramaGif from './hashirama.gif';

function App() {
    return (
        <Router>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: 0 }}>
                <Box sx={{ textAlign: 'center', maxWidth: 800, margin: 'auto', padding: 2, backgroundColor: '#ffffff', border: 1, borderColor: 'grey.300', boxShadow: 1, flex: 1, position: 'relative' }}>
                    <Header />
                    <AppStateProvider>
                        <CircularNavbar />
                    </AppStateProvider>
                    <Footer />
                    <Box sx={{ position: 'fixed', bottom: 10, left: 10, zIndex: 1000 }}>
                        <img src={hashiramaGif} alt="Hashirama" style={{ width: 175 }} />
                    </Box>
                </Box>
            </Container>
        </Router>
    );
}

export default App;
