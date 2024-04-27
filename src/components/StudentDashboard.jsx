import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const StudentDashboard = ({ profile, token }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }

        const coursesData = await response.json();
        setCourses(coursesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, [token]);

  if (loading || !profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="w-100 d-flex px-5 gap-3 py-5" style={{ backgroundColor: '#1d3b53' }}>
        <div className="rounded rounded-circle">
          <img
            src={profile.profileImage}
            height="150px"
            width="150px"
            className="rounded rounded-circle"
            alt="Profile"
          />
        </div>
        <div className="pt-1">
          <h1 className="text-white m-0">{profile.name} | {profile.status}</h1>
          <h6 className="text-white text-uppercase">{profile.department}</h6>
          <h6 className="text-white">{profile.email} | {profile.phone}</h6>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-4 px-3">
          <div className="col-md-3">
            <div className="card mb-2 bg-dark text-white">
              <div className="card-header border-white">
                <h3 className="text-primary">Profile</h3>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/profile" className="text-white text-decoration-none d-block w-100">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/update_profile" className="text-white text-decoration-none d-block w-100">
                      Update Profile
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card bg-dark text-white mb-2">
              <div className="card-header border-white">
                <h3 className="text-primary">Courses</h3>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  {courses.map((course, index) => (
                    <li key={index}>
                      <a className="text-white text-decoration-none" href="#">
                        {course.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-header">
                <h2>My Courses List</h2>
              </div>
              <div className="card-body">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="rounded rounded-2 p-2 d-flex justify-content-between align-items-center mb-3"
                    style={{
                      boxShadow:
                        'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
                    }}
                  >
                    <div className="d-flex gap-2">
                      <img src={course.image} width="100px" alt="Course" />
                      <div className="d-flex align-items-center">
                        <h3>{course.name}</h3>
                      </div>
                    </div>
                    <div className="w-25">
                      <h6 className="text-danger">Progress</h6>
                      <div className="progress" style={{ height: '5px' }}>
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: `${course.progress}%`, height: '5px' }}
                          aria-valuenow={course.progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <p className="m-0 text-danger">{course.progress}%</p>
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

            {/* Additional Course Section */}
            <div className="rounded rounded-2 p-2 d-flex justify-content-between align-items-center" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' }}>
              <div className="d-flex gap-2">
                <img src="{% static '/images/course/02.jpg' %}" width="100px" />
                <div className="d-flex align-items-center">
                  <h3>Photoshop Advance</h3>
                </div>
              </div>
              <div className="w-25">
                <h6 className="text-success">Progress</h6>
                <div className="progress" style={{ height: '5px' }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: '100%', height: '5px' }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="d-flex justify-content-end">
                  <p className="m-0 text-success">100%</p>
                </div>
              </div>
              <div className="mx-5">
                <button className="btn btn-success">
                  <i className="fa-solid fa-check"></i> Complete
                </button>
                <button className="btn btn-outline-danger">
                  <i className="fa-solid fa-arrow-rotate-right"></i> Restart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
