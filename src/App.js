import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Summary />
            <Skills />
            <WorkHistory />
            <Education />
            <Certifications />
            <Footer />
        </div>
    );
}

export default App;
