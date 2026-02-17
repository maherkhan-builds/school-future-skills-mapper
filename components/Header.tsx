
import React from 'react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Explorer', href: '#' },
    { name: 'Skills', href: '#' },
    { name: 'Progress', href: '#' },
    { name: 'Recommendations', href: '#' },
  ];

  return (
    <header className="w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-10 sticky top-0">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-indigo-700 font-medium transition-colors duration-200"
              aria-label={`Navigate to ${link.name} section`}
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Mobile menu button could go here */}
      </nav>
    </header>
  );
};
