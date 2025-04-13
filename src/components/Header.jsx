import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container lg:max-w-5/6 mx-auto px-4 py-4 flex justify-between items-center">
        {/* Website Name */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Early Detect
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {['Home', 'Assessment', 'About'].map((item) => {
            const path =
              item === 'Home'
                ? '/'
                : item === 'Assessment'
                ? '/input'
                : '/about';
            const isActive = location.pathname === path;

            return (
              <Link
                key={item}
                to={path}
                className={`transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive
                    ? 'font-semibold text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {item}
              </Link>
            );
          })}
        </nav>

        {/* Theme Switcher and Mobile Menu Button */}
        <div className="flex items-center">
          <ThemeSwitcher />
          <button
            className="md:hidden text-gray-600 dark:text-gray-300 ml-4"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ rotate: 0 }}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-md z-40"
            role="menu"
            onClick={closeMobileMenu}
          >
            <div
              className="container mx-auto px-4 py-4 flex flex-col space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {['Home', 'Assessment', 'About'].map((item) => {
                const path =
                  item === 'Home'
                    ? '/'
                    : item === 'Assessment'
                    ? '/input'
                    : '/about';
                const isActive = location.pathname === path;

                return (
                  <Link
                    key={item}
                    to={path}
                    onClick={closeMobileMenu}
                    className={`transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                      isActive
                        ? 'font-semibold text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                    role="menuitem"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
