import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import'./Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <div className='quiz'>Quize Academy</div>
            <div className='header'>
                <NavLink to='/home'>Topics </NavLink>
                <NavLink to='/blogs'>Blogs</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/about'>About</NavLink>

            </div>
        </div>
    );
};

export default Header;