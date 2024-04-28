import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log('Search query:', searchQuery);

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
        setCourses(response.data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect or perform other actions with the searchQuery
    console.log(`Redirect to: /allcourses?search_query=${searchQuery}`);
  };

  return (
    <div className="mb-2">
      <div className="w-100 d-flex justify-content-center align-items-center flex-column py-5" style={{ backgroundColor: '#1d3b53' }}>
        <h2 className="text-white">
          What You Want To
          <span className="text-danger" style={{ fontSize: '1.5em' }}>Learn ?</span>
        </h2>

        <div className="w-50 position-relative">
          <form onSubmit={handleSubmit} id="search_form">
            <input
              type="text"
              name="search_query"
              id="search_form_query"
              placeholder="Search Course"
              className="w-100 px-3 py-3"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="btn btn-danger position-absolute px-4"
              style={{ right: '5px', top: '5px', bottom: '5px' }}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="m-5 d-flex flex-wrap justify-content-center gap-3">
        {courses.map((course) => (
          //replace with correct url
          <a key={course.id} href={`/course_detail/${course.id}`}>
            <div className="card border-0 shadow" style={{ width: '18rem' }}>
              <img
                src={course.image_course_course}
                className="card-img-top"
                width="100%"
                height="180px"
                alt={course.name}
              />

              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  {course.tags.map((tag) => (
                    <span key={tag.id} className="badge bg-danger bg-gradient">
                      {tag.name}
                    </span>
                  ))}
                </div>
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.small_description}</p>
                <ul className="list-inline mb-0">
                  {[...Array(course.rating)].map((_, index) => (
                    <li key={index} className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                  ))}
                  <li className="list-inline-item ms-2 h6 fw-light mb-0 fw-bold">{course.rating}/5.0</li>
                </ul>
              </div>
              <div className="card-footer pt-0 pb-3 bg-white border-0">
                <hr />
                <div className="d-flex justify-content-between mt-2">
                  <span className="h6 mb-0"><i className="far fa-clock text-danger me-2"></i>{course.videos_time}</span>
                  <span className="h6 mb-0"><i className="fas fa-table text-primary me-2"></i>{course.total_module} modules</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
