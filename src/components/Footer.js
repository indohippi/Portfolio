import React from 'react';

function Footer() {
    return (
        <footer className="footer-container">
            <p>Copyright © 2023. All Rights Reserved.</p>
            <div>
                <a href="social_link_1"><img src="path_to_social_icon_1.png" alt="Social Icon 1" /></a>
                <a href="social_link_2"><img src="path_to_social_icon_2.png" alt="Social Icon 2" /></a>
                {/* Add more social icons as needed */}
            </div>
        </footer>
    );
}

export default Footer;
