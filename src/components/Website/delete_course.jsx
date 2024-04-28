import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DeleteCourse = ({ id }) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/courses/${id}`);
      setSuccessMessage('Course deleted successfully.');
    } catch (error) {
      console.error('Error deleting course:', error);
      setErrorMessage('Failed to delete course. Please try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="text-center">
        <h1>Delete Course</h1>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={handleDelete}>
          <p>Are you sure you want to delete this course?</p>
          <div>
            <button type="submit" className="btn btn-danger">Delete</button>
            <Link to={`/courses`} className="btn btn-secondary ms-2">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteCourse;
