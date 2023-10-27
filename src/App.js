import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

// Import the individual components
import { AppStateProvider } from './components/AppStateContext';
import Header from './components/Header';
import CircularNavbar from './components/CircularNavbar';
import Footer from './components/Footer';
import hashiramaGif from './hashirama.gif';  // Adjusted the path

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <AppStateProvider>
                    <CircularNavbar />
                </AppStateProvider>
                <Footer />
                <div className="floating-image">
                    <img src={hashiramaGif} alt="Hashirama" />  {/* Use the imported variable directly */}
                </div>
            </div>
        </Router>
    );
}

export default App;
