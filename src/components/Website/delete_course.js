import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const DeleteCourse = ({ match }) => {
  const { id } = match.params; 

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/courses/${id}`); 
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div className="container">
      <h1>Delete Course</h1>
      <form onSubmit={handleDelete}>
        <p>Are you sure you want to delete this course?</p>
        <button type="submit" className="btn btn-danger">Delete</button>
        <Link to={`/courses`} className="btn btn-secondary">Cancel</Link>
      </form>
    </div>
  );
};

export default DeleteCourse;
