import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { 
      name: 'Solutions', 
      href: '#',
      dropdown: [
        { name: 'PSA Suite', href: 'https://salescentri.com/solutions/psa-suite' },
        { name: 'IT Industry', href: 'https://salescentri.com/solutions/by-industry/it' },
        { name: 'Healthcare', href: 'https://salescentri.com/solutions/by-industry/healthcare' },
        { name: 'SDR Teams', href: 'https://salescentri.com/solutions/by-use-case/sdr-teams' },
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-navy-800 to-navy-900 bg-clip-text text-transparent">
              Digitalglim
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors duration-200">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-gray-700 hover:text-orange-500 transition-colors duration-200 ${
                      location.pathname === item.href ? 'text-orange-500 font-medium' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://salescentri.com/get-started/free-trial"
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              Free Trial
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
            >
              Book Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-gray-600 hover:text-orange-500"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  className="block text-gray-700 hover:text-orange-500"
                >
                  Free Trial
                </a>
                <a
                  href="https://salescentri.com/get-started/book-demo"
                  className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg"
                >
                  Book Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;