import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

// Main component for the autism screening input form
const InputForm = () => {
  // State for form data, UI flow, and API response
  const [formData, setFormData] = useState({
    A1_Score: '',
    A2_Score: '',
    A3_Score: '',
    A4_Score: '',
    A5_Score: '',
    A6_Score: '',
    A7_Score: '',
    A8_Score: '',
    A9_Score: '',
    A10_Score: '',
    age: '',
    gender: '',
    ethnicity: '',
    jundice: '',
    austim: '',
    contry_of_res: '',
    used_app_before: '',
    result: '',
    relation: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showPrediction, setShowPrediction] = useState(false);
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');

  // Handle changes to form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form to show confirmation page
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  // Send data to backend for prediction
  const handleConfirm = async () => {
    setShowConfirmation(false);
    setShowLoading(true);
    try {
      const dataToSend = {
        A1_Score: formData.A1_Score === 'yes' ? 1 : 0,
        A2_Score: formData.A2_Score === 'yes' ? 1 : 0,
        A3_Score: formData.A3_Score === 'yes' ? 1 : 0,
        A4_Score: formData.A4_Score === 'yes' ? 1 : 0,
        A5_Score: formData.A5_Score === 'yes' ? 1 : 0,
        A6_Score: formData.A6_Score === 'yes' ? 1 : 0,
        A7_Score: formData.A7_Score === 'yes' ? 1 : 0,
        A8_Score: formData.A8_Score === 'yes' ? 1 : 0,
        A9_Score: formData.A9_Score === 'yes' ? 1 : 0,
        A10_Score: formData.A10_Score === 'yes' ? 1 : 0,
        age: parseInt(formData.age),
        gender: formData.gender === 'male' ? 'm' : 'f',
        ethnicity: formData.ethnicity || 'Unknown',
        jundice: formData.jundice,
        austim: formData.austim,
        contry_of_res: formData.contry_of_res || 'Unknown',
        used_app_before: formData.used_app_before,
        result: parseInt(formData.result),
        relation: formData.relation || 'Unknown',
      };

      console.log('Data being sent:', dataToSend);

      const response = await axios.post(
        //'https://c205-156-221-48-140.ngrok-free.app/predict',
        'http://localhost:5000/predict',
        dataToSend
      );
      setPrediction(response.data.prediction);
      setError('');
      setShowLoading(false);
      setShowPrediction(true);
    } catch (err) {
      console.error('Prediction error:', err);
      setError('Something went wrong. Please try again.');
      setShowLoading(false);
      setShowPrediction(true);
    }
  };

  // Return to form for editing
  const handleEdit = () => {
    setShowConfirmation(false);
  };

  // Reset form and start over
  const handleRestart = () => {
    setFormData({
      A1_Score: '',
      A2_Score: '',
      A3_Score: '',
      A4_Score: '',
      A5_Score: '',
      A6_Score: '',
      A7_Score: '',
      A8_Score: '',
      A9_Score: '',
      A10_Score: '',
      age: '',
      gender: '',
      ethnicity: '',
      jundice: '',
      austim: '',
      contry_of_res: '',
      used_app_before: '',
      result: '',
      relation: '',
    });
    setPrediction('');
    setError('');
    setShowPrediction(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        {/* Form Page */}
        {!showConfirmation && !showLoading && !showPrediction && (
          <>
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
              Enter Child’s Information
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  A1: Does the child make eye contact?
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="A1_Score"
                  value={formData.A1_Score}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </motion.select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  A2: Does the child respond to their name?
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="A2_Score"
                  value={formData.A2_Score}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </motion.select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  A3: Does the child point to objects they want?
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="A3_Score"
                  value={formData.A3_Score}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </motion.select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  A4: Does the child follow simple instructions?
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="A4_Score"
                  value={formData.A4_Score}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </motion.select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  A5: Does the child show interest in other children?
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="A5_Score"
                  value={formData.A5_Score}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </motion.select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  A6: Does the child use imaginative play (e.g., pretend games)?
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="A6_Score"
                  value={formData.A6_Score}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </motion.select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  A7: Does the child repeat words or phrases out of context?
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="A7_Score"
                  value={formData.A7_Score}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </motion.select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  A8: Does the child have unusual reactions to sounds or
                  textures?
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="A8_Score"
                  value={formData.A8_Score}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </motion.select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  A9: Does the child flap hands or rock when excited?
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="A9_Score"
                  value={formData.A9_Score}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </motion.select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  A10: Does the child get upset by small changes in routine?
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="A10_Score"
                  value={formData.A10_Score}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </motion.select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  Age
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="4"
                  max="11"
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  Gender
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </motion.select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  Ethnicity
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="ethnicity"
                  value={formData.ethnicity}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  Jaundice at Birth?
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="jundice"
                  value={formData.jundice}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </motion.select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  Family History of ASD?
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="austim"
                  value={formData.austim}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </motion.select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  Country of Residence
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="contry_of_res"
                  value={formData.contry_of_res}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  Used App Before?
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="used_app_before"
                  value={formData.used_app_before}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </motion.select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  Screening Score (0-10)
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="number"
                  name="result"
                  value={formData.result}
                  onChange={handleChange}
                  min="0"
                  max="10"
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">
                  Relation to Child
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="relation"
                  value={formData.relation}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
              >
                Review Choices
              </motion.button>
            </form>
          </>
        )}

        {/* Confirmation Page */}
        {showConfirmation && (
          <>
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
              Confirm Your Choices
            </h2>
            <div className="space-y-4">
              <p>
                <strong>A1 (Eye Contact):</strong> {formData.A1_Score}
              </p>
              <p>
                <strong>A2 (Respond to Name):</strong> {formData.A2_Score}
              </p>
              <p>
                <strong>A3 (Point to Objects):</strong> {formData.A3_Score}
              </p>
              <p>
                <strong>A4 (Follow Instructions):</strong> {formData.A4_Score}
              </p>
              <p>
                <strong>A5 (Interest in Children):</strong> {formData.A5_Score}
              </p>
              <p>
                <strong>A6 (Imaginative Play):</strong> {formData.A6_Score}
              </p>
              <p>
                <strong>A7 (Repeat Words):</strong> {formData.A7_Score}
              </p>
              <p>
                <strong>A8 (Reactions to Sounds/Textures):</strong>{' '}
                {formData.A8_Score}
              </p>
              <p>
                <strong>A9 (Flap/Rock):</strong> {formData.A9_Score}
              </p>
              <p>
                <strong>A10 (Upset by Changes):</strong> {formData.A10_Score}
              </p>
              <p>
                <strong>Age:</strong> {formData.age}
              </p>
              <p>
                <strong>Gender:</strong> {formData.gender}
              </p>
              <p>
                <strong>Ethnicity:</strong> {formData.ethnicity}
              </p>
              <p>
                <strong>Jaundice at Birth:</strong> {formData.jundice}
              </p>
              <p>
                <strong>Family History of ASD:</strong> {formData.austim}
              </p>
              <p>
                <strong>Country of Residence:</strong> {formData.contry_of_res}
              </p>
              <p>
                <strong>Used App Before:</strong> {formData.used_app_before}
              </p>
              <p>
                <strong>Screening Score:</strong> {formData.result}
              </p>
              <p>
                <strong>Relation to Child:</strong> {formData.relation}
              </p>
            </div>
            <div className="flex space-x-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleConfirm}
                className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all"
              >
                Confirm and Predict
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEdit}
                className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-all"
              >
                Edit Choices
              </motion.button>
            </div>
          </>
        )}

        {/* Loading Page */}
        {showLoading && (
          <div className="flex flex-col items-center justify-center h-64">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 border-4 border-blue-600 rounded-full border-t-4 border-t-transparent dark:border-blue-400 dark:border-t-4 dark:border-t-transparent"
            ></motion.div>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Processing your assessment...
            </p>
          </div>
        )}

        {/* Prediction Page */}
        {showPrediction && (
          <>
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
              Assessment Result
            </h2>
            {prediction && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg text-green-600 dark:text-green-400 mb-6"
              >
                Prediction: {prediction}
              </motion.p>
            )}
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg text-red-600 dark:text-red-400 mb-6"
              >
                {error}
              </motion.p>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRestart}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Take Assessment Again
            </motion.button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default InputForm;
