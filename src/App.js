import React, { useState } from 'react';
import './App.css';

// Import the individual components
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

// This will be the new wheel navigation component
function WheelNav() {
    const [activeTab, setActiveTab] = useState('summary');

    return (
        <div className="wheel-nav">
            <button onClick={() => setActiveTab('summary')}>Summary</button>
            <button onClick={() => setActiveTab('skills')}>Skills</button>
            <button onClick={() => setActiveTab('work')}>Work History</button>
            <button onClick={() => setActiveTab('education')}>Education</button>
            <button onClick={() => setActiveTab('certifications')}>Certifications</button>

            {activeTab === 'summary' && <Summary />}
            {activeTab === 'skills' && <Skills />}
            {activeTab === 'work' && <WorkHistory />}
            {activeTab === 'education' && <Education />}
            {activeTab === 'certifications' && <Certifications />}
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Header />
            <WheelNav />
            <Footer />
        </div>
    );
}

export default App;
