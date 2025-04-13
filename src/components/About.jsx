import React from 'react';
import { motion } from 'framer-motion';

// Placeholder image (replace with your actual image)
import autismImage from '../assets/about.jpg'; // Adjust path as needed

const About = () => {
  // Animation variants for staggered effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Two-column layout: Image and Text */}
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 p-6 lg:p-10 flex items-center justify-center"
          >
            <img
              src={autismImage}
              alt="Autism Awareness"
              className="w-full max-w-md h-auto rounded-xl shadow-md object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <div className="lg:w-1/2 p-6 lg:p-10">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8"
            >
              About Early Detect
            </motion.h2>
            <div className="space-y-8 text-gray-700 dark:text-gray-300">
              {/* Section 1: What is ASD */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  What is Autism Spectrum Disorder (ASD)?
                </h3>
                <p className="text-base leading-relaxed">
                  Autism Spectrum Disorder (ASD) is a developmental condition
                  that affects communication, behavior, and social interactions.
                  It varies widely in severity and symptoms, which may include
                  challenges with social skills, repetitive behaviors, and
                  sensory sensitivities. Early identification can significantly
                  improve outcomes through timely interventions.
                </p>
              </motion.div>

              {/* Section 2: Our Project */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Our Project and How It Works
                </h3>
                <p className="text-base leading-relaxed">
                  Early Detect leverages a pre-trained artificial intelligence
                  model to analyze behavioral and developmental data provided by
                  users. By answering a series of questions about a child’s
                  behavior and history, our tool generates a preliminary
                  assessment of potential ASD indicators. The model is built
                  using advanced data analysis techniques to ensure reliable
                  insights.
                </p>
              </motion.div>

              {/* Section 3: Important Notice */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Important Notice
                </h3>
                <p className="text-base leading-relaxed">
                  This assessment is not a substitute for a professional medical
                  diagnosis. It is designed to provide preliminary guidance and
                  encourage further evaluation by qualified healthcare
                  providers. Always consult a specialist for an accurate
                  diagnosis and personalized support plan.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
