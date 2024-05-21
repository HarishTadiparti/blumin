import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/page-logo.png'

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow border-gray-400 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-6 md:mb-0">
                        {/* <img src="./vite.svg" alt="Logo" className="h-8 md:h-10 mr-4" /> */}

                        <img src={Logo} alt='Logo' className=' h-[10vh]' />
                        <span className="text-md text-gray-600 dark:text-gray-400">BLUMIN</span>
                    </div>
                    <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500">
                        <li>
                            <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:underline me-4 md:me-6">Team</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:underline me-4 md:me-6">History</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:underline">Careers</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">&copy; 2024 BLUMIN. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
