import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios'; 

const DeleteModule = () => {
  const { moduleId } = useParams(); 
  const history = useHistory(); 

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/modules/${moduleId}`); 
      history.push('/courses'); 
    } catch (error) {
      console.error('Error deleting module:', error);
    }
  };

  return (
    <div className="container">
      <h1>Delete Module</h1>
      <form onSubmit={handleDelete}>
        <p>Are you sure you want to delete this module?</p>
        <button type="submit" className="btn btn-danger">Delete</button>
        <Link to={`/courses`} className="btn btn-secondary">Cancel</Link>
      </form>
    </div>
  );
};

export default DeleteModule;
