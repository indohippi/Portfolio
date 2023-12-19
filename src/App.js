import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';

// Import the individual components
import { AppStateProvider } from './components/AppStateContext';
import Header from './components/Header';
import CircularNavbar from './components/CircularNavbar';
import Footer from './components/Footer';
import hashiramaGif from './hashirama.gif';  // Adjusted the path

function App() {
    return (
        <Router>
            <CssBaseline />
            <Container maxWidth="lg" style={{ padding: 0 }}>
                <div className="App">
                    <Header />
                    <AppStateProvider>
                        <CircularNavbar />
                    </AppStateProvider>
                    <Footer />
                    <div className="floating-image">
                        <img src={hashiramaGif} alt="Hashirama" />
                    </div>
                </div>
            </Container>
        </Router>
    );
}

export default App;
