import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          Welcome to Early Detect
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Early Detect is an innovative tool powered by artificial intelligence
          to assist in the early identification of Autism Spectrum Disorder
          (ASD) in children. Our platform analyzes behavioral and developmental
          data to provide preliminary insights, helping parents and caregivers
          take informed steps toward professional diagnosis and support.
        </p>
        <button
          onClick={() => navigate('/input')}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Start Assessment
        </button>
      </div>
    </div>
  );
};

export default Home;
