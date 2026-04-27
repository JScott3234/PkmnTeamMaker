import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';

function TeamMaker() {
    return (
        <div>
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<h2>Home Page</h2>} />
                    <Route path="/team" element={<h2>Team Page</h2>} />
                    <Route path="/settings" element={<h2>Settings Page</h2>} />
                </Routes>
            </div>
        </div>
    );
}

export default TeamMaker;