import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DeleteModule = ({ id }) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/modules/${id}`);
      setSuccessMessage('module deleted successfully.');
    } catch (error) {
      console.error('Error deleting module:', error);
      setErrorMessage('Failed to delete module. Please try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="text-center">
        <h1>Delete module</h1>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={handleDelete}>
          <p>Are you sure you want to delete this module?</p>
          <div>
            <button type="submit" className="btn btn-danger">Delete</button>
            <Link to={`/modules`} className="btn btn-secondary ms-2">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteModule;
