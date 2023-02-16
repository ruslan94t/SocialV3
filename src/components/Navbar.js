import React from 'react';

function Navbar(props) {
    return (
        <nav className="nav">
            <div>
                <a>Portfolie</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;