function Header() {
    return (
        <header className="header-container">
            <h1 className="glow-effect">Jared Wienen</h1>
            <address className="contact-details">
                Austin, United States 78626 <br/>
                Tel: 4305022281 <br/>
                Email: <a href="mailto:jaredwienen@gmail.com">jaredwienen@gmail.com</a> <br/>
                LinkedIn: <a href="https://linkedin.com/in/jaredwienen">linkedin.com/in/jaredwienen</a>
            </address>
            <div className="links-container">
                <a href="https://github.com/indohippi" className="profile-link">GitHub</a> | 
                <a href="https://replit.com/@indohippi" className="profile-link">Repl.it</a> |
                <a href="https://acc-capstone-jw.netlify.app/" className="profile-link">Full Stack Sample</a>
            </div>
        </header>
    );
}
export default Header;
