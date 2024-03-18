import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const DeleteQuiz = () => {
  const { quizId } = useParams();
  const history = useHistory();

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/quizzes/${quizId}`);
      history.push('/'); // Redirect to where?
    } catch (error) {
      console.error('Error deleting quiz:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <h2>Delete Quiz</h2>
          <hr />
          <form onSubmit={handleDelete}>
            <p>Are you sure you want to delete quiz?</p>
            <button type="submit" className="btn btn-danger">Delete</button>
            <button type="button" className="btn btn-primary" onClick={() => history.push('/')}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteQuiz;
