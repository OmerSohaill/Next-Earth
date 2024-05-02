import { useState } from 'react';
import './nav.css';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="text-gray-600 body-font nb">
            <div className="container mx-auto flex items-center justify-between p-5">
                {/* Logo */}
                <a className="flex title-font font-medium items-center text-gray-900">
                    <img src="https://nextearth.io/modules/_site/images/logo.png" alt="logo" className="" />
                </a>
                {/* Hamburger Icon */}
                <div className="md:hidden" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </div>
                {/* Navigation Links */}
                <nav className={`md:flex md:ml-auto items-center text-base justify-center ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <a className="mr-5 hover:text-gray-900 nm">MAP</a>
                    <a className="mr-5 hover:text-gray-900 nlr">Login</a>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
