import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Results = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          Assessment Result
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          <strong>Result:</strong>{' '}
          {state.prediction === 1
            ? 'Possible ASD Indicators Detected'
            : 'No ASD Indicators Detected'}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          <strong>Advice:</strong> This assessment is a preliminary tool. We
          strongly recommend consulting a healthcare professional for a
          comprehensive evaluation and diagnosis.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/input')}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          Retake Assessment
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Results;
