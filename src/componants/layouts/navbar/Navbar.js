import React from "react";
import './navbar.styles.css';
import { Link } from 'react-router-dom';

const Navbar = ({ darkTheme }) => {

    return (
        <section className="navbar-container">
            <div className="container flex justify-between align-center">
                <a href="#" className="logo">Book<span className="text-primary">worm</span></a>

                <nav className="nav-links-container">
                    <Link to="/" className="nav-links">Home</Link>
                    <Link to="/Books" className="nav-links">Books</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/signup" className="nav-link">Signup</Link>
                </nav>
            </div>
        </section>
    )
}

export default Navbar;