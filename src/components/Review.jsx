import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const Review = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/predict', state);
      navigate('/results', { state: response.data });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          Review Your Answers
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Age:</strong> {state.age}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Gender:</strong> {state.gender}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>A1 (Eye Contact):</strong> {state.a1}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Jaundice at Birth:</strong> {state.jaundice}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Family History of ASD:</strong> {state.familyHistory}
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          Send to Analyze
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Review;
