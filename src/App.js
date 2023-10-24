import React from 'react';
import './App.css';

// Import the individual components
import { AppStateProvider } from './components/AppStateContext';
import Header from './components/Header';
import CircularNavbar from './components/CircularNavbar'; // Note: Changed WheelNav to CircularNavbar
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <AppStateProvider>
                <CircularNavbar />
            </AppStateProvider>
            <Footer />
        </div>
    );
}

export default App;
