import React, { FC } from 'react';
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    
    return(
        <nav className={`${styles.Navbar} navbar`}>
            <h2><NavLink to="/">Blog</NavLink></h2>
            <div className="links"> {/* do not use anchor tags so that a new request to server is prevented every time we navigate*/}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">New Blog</NavLink>
            </div>
        </nav>
    );
}



export default Navbar;
