import { useState } from 'react';
import logo from '../../public/images/Logo .svg';
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
            <a
                href="/"
                className="logo">
                <img
                    src={logo}
                    alt="logo"
                />
            </a>

            <div
                className="menu-icon"
                onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-links ${menuOpen ? 'visible' : ''}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order Now</a>
                </li>
                <li>
                    <a href="/">My Account</a>
                </li>
            </ul>
        </nav>
    );
};
