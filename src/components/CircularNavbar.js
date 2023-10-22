// CircularNavbar.js
import React from 'react';

function CircularNavbar({ onSelectTab }) {
    return (
        <div className="circle-nav">
            <button onClick={() => onSelectTab('skills')}>Skills</button>
            <button onClick={() => onSelectTab('work-history')}>Work History</button>
            <button onClick={() => onSelectTab('education')}>Education</button>
            <button onClick={() => onSelectTab('certifications')}>Certifications</button>
        </div>
    );
}

export default CircularNavbar;
