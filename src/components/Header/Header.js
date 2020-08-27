import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h3 className="bg-primary">Welcome To Online Course Site</h3>
            <nav className="bg-dark">
                <a href="home">Home</a>
                <a href="course">Course</a>
                <a href="profile">Profile</a>
            </nav>
        </div>
    );
};

export default Header;