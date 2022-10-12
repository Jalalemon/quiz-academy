import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import'./Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <div className='quiz'>Quize Academy</div>
            <div className='header'>
                
                <NavLink to='/'>Home </NavLink>
                <NavLink to='/home'>Topics </NavLink>
                <NavLink to='/blogs'>Blogs</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>

            </div>
        </div>
    );
};

export default Header;