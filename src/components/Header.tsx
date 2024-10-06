import React from 'react';
import { Shirt } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat text-dark-brown shadow-lg"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/06/36/44/26/360_F_636442646_II8z4yhYbPoea8P6HoimUblo6ZQXzUXY.jpg')",
        height: '60vh',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>{' '}
      {/* Overlay for better text readability */}
      <div className="container mx-auto p-6 relative z-10 flex flex-col items-center justify-center h-full text-center">
        <div className="flex items-center space-x-4 mb-4">
          <Shirt className="w-10 h-10 text-white" />
          <h1 className="text-4xl font-extrabold text-white">
            Personalized Fashion Stylist
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li>
              <Link
                to="/"
                className="text-white hover:text-light-brown transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-light-brown transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-light-brown transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
