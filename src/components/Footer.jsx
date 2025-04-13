import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 dark:bg-gray-800 py-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 Early Detect. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
