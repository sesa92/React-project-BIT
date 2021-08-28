import React from 'react';

import './Header.css';

const Header = ({ name, onUserSwitch }) => {
    return (
        <nav className= "header">
            <div className= "container-fluid">
                <p className="navbar-brand mb-0 h1 title">My react blog</p>
                <p>{name}</p>
                <button onClick={onUserSwitch}>Switch User</button>
            </div>
        </nav>
    )
};

export { Header };