import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

// Import the individual components
import { AppStateProvider } from './components/AppStateContext';
import Header from './components/Header';
import CircularNavbar from './components/CircularNavbar';
import Footer from './components/Footer';

function App() {
    return (
        <Router> {/* Wrap the entire app with Router */}
            <div className="App">
                <Header />
                <AppStateProvider>
                    <CircularNavbar />
                </AppStateProvider>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
