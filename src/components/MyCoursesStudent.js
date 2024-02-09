import React, { useState, useEffect } from 'react';
import '../css/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const MyCoursesStudent = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://your-backend-api.com/courses') //replace api 
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []); 

  return (
    <div className="card">
      <div className="card-header">
        <h2>My Courses List</h2>
      </div>
      <div className="card-body">
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            <img src={course.image} alt={course.title} width="100px" />
            <div className="course-details">
              <h3>{course.title}</h3>
              <div className="progress" style={{ height: '5px' }}>
                <div
                  className={`progress-bar bg-${course.progressColor}`}
                  role="progressbar"
                  style={{ width: `${course.progress}%`, height: '5px' }}
                  aria-valuenow={course.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="d-flex justify-content-end">
                <p className={`m-0 text-${course.progressColor}`}>{course.progress}%</p>
              </div>
            </div>
            <div className="mx-5">
              <button className="btn btn-outline-primary">
                <i className="fa-solid fa-circle-play"></i> Continue
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCoursesStudent;
