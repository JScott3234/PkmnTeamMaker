import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>TeamMaker</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
