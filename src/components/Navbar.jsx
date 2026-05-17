import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/staff', label: 'Staff' },
    { to: '/documents', label: 'Documents' },
    { to: '/achievements', label: 'Achievements' },
    { to: '/sport', label: 'Sport' },
    { to: '/activities', label: 'Activities' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/boarding', label: 'Boarding' },
    { to: '/contact', label: 'Contact' },
  ];
  
  const isActive = (path) => window.location.pathname === path;
  
  return (
    <nav className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-amber-400" />
            <span className="font-bold text-lg">Lupindo SSS</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {links.map(link => (
              <Link key={link.to} to={link.to} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">
                {link.label}
              </Link>
            ))}
          </div>
          
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden border-t border-green-700">
          {links.map(link => (
            <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)} className="block px-4 py-3">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
