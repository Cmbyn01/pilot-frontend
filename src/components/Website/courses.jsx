import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/courses/course/getallcourses/?search_query=${searchQuery}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${localStorage.getItem('token')}`,
            },

          }
        ); //change api
        console.log('Courses:', response.data);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {courses.map(course => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={course.image_course_course.url} alt={course.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{course.teacher.profile.name}</h6>
                <p className="card-text">{course.small_description}</p>
                <h6>Course Progress: {course.courseprogress.total_progress_percent}%</h6>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${course.courseprogress.total_progress_percent}%` }}
                    aria-valuenow={course.courseprogress.total_progress_percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {course.courseprogress.total_progress_percent}%
                  </div>
                </div>
                <br />
                <a href={`/course_detail/${course.id}`} className="btn btn-primary">
                  View Full Course
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
