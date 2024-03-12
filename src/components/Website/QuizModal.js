import React from 'react';
import PropTypes from 'prop-types';
import '../../css/QuizModal.css'; // You should create a QuizModal.css file for styling

const QuizModal = ({ show, handleClose }) => {
  // If show is false, return null to not render anything
  if (!show) return null;

  return (
    <div className="quiz-modal">
      <div className="quiz-modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Quiz Time!</h2>
        <p>Put your quiz questions here...</p>
        {/* Add your quiz questions and input fields here */}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

QuizModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default QuizModal;
