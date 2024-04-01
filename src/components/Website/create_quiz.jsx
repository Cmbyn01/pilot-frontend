import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CreateQuiz = () => {
  const [timestamp, setTimestamp] = useState('');
  const [passMark, setPassMark] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [answers, setAnswers] = useState([
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false }
  ]);

  const handleAnswerChange = (index, field, value) => {
    const newAnswers = [...answers];
    newAnswers[index][field] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to the server
    console.log('Timestamp:', timestamp);
    console.log('Pass Mark:', passMark);
    console.log('Question Text:', questionText);
    console.log('Answers:', answers);
    // Reset form fields
    setTimestamp('');
    setPassMark('');
    setQuestionText('');
    setAnswers([
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
      { text: '', isCorrect: false }
    ]);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="timestamp">Quiz Timestamp</label>
              <input
                type="time"
                className="form-control"
                id="timestamp"
                name="timestamp"
                step="1"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
                required
              />
              <small className="form-text text-muted">Enter timestamp in hours:minutes:seconds (e.g. 01:30:25)</small>
            </div>
            
            <div className="form-group">
              <label htmlFor="pass_mark">Pass Mark</label>
              <input
                type="text"
                className="form-control"
                id="pass_mark"
                name="pass_mark"
                value={passMark}
                onChange={(e) => setPassMark(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="question_text">Question Text</label>
              <textarea
                className="form-control"
                id="question_text"
                name="question_text"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                rows="3"
                required
              />
            </div>

            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="form-group">
                <label htmlFor={`answer${index}_text`}>Answer {index} Text</label>
                <input
                  type="text"
                  className="form-control"
                  id={`answer${index}_text`}
                  name={`answer${index}_text`}
                  value={answers[index - 1].text}
                  onChange={(e) => handleAnswerChange(index - 1, 'text', e.target.value)}
                  required
                />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`answer${index}_is_correct`}
                    name={`answer${index}_is_correct`}
                    checked={answers[index - 1].isCorrect}
                    onChange={(e) => handleAnswerChange(index - 1, 'isCorrect', e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor={`answer${index}_is_correct`}>
                    Correct answer
                  </label>
                </div>
              </div>
            ))}

            <button type="submit" className="btn btn-primary">Create Quiz</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
