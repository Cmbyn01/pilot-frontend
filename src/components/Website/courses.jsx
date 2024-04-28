

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CoursesList = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(`/api/courses`, {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Token ${localStorage.getItem('token')}`,
//           },
//         });
//         console.log('Courses:', response.data);
//         setCourses(response.data);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="container">
//       <div className="row">
//         {courses.map(course => (
//           <div key={course.id} className="col-md-4 mb-4">
//             <div className="card">
//               <img src={course.image_course.url} alt={course.name} className="card-img-top" />
//               <div className="card-body">
//                 <h5 className="card-title" style={{ maxHeight: '3.6em', overflow: 'hidden' }}>{course.name}</h5>
//                 <h6 className="card-subtitle mb-2 text-muted" style={{ maxHeight: '2.4em', overflow: 'hidden' }}>{course.teacher.profile.name}</h6>
//                 <p className="card-text" style={{ maxHeight: '7.2em', overflow: 'hidden' }}>{course.small_description}</p>
//                 <h6>Course Progress: {course.courseprogress.total_progress_percent}%</h6>
//                 <div className="progress">
//                   <div
//                     className="progress-bar bg-success"
//                     role="progressbar"
//                     style={{ width: `${course.courseprogress.total_progress_percent}%` }}
//                     aria-valuenow={course.courseprogress.total_progress_percent}
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                   >
//                     {course.courseprogress.total_progress_percent}%
//                   </div>
//                 </div>
//                 <br />
//                 <a href={`/course_detail/${course.id}`} className="btn btn-primary">
//                   View Full Course
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CoursesList;


import React, { useState, useEffect } from 'react';

const CoursesList = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Course 1",
      teacher: { profile: { name: "John Doe" } },
      small_description: "This is a short description of Course 1.",
      courseprogress: { total_progress_percent: 25 },
      image_course: { url: "https://via.placeholder.com/300" }
    },
    {
      id: 2,
      name: "Course 2",
      teacher: { profile: { name: "Jane Smith" } },
      small_description: "This is a short description of Course 2.",
      courseprogress: { total_progress_percent: 50 },
      image_course: { url: "https://via.placeholder.com/300" }
    },
    {
      id: 3,
      name: "Course 3",
      teacher: { profile: { name: "Alice Johnson" } },
      small_description: "This is a short description of Course 3.",
      courseprogress: { total_progress_percent: 75 },
      image_course: { url: "https://via.placeholder.com/300" }
    }
  ]);

  return (
    <div className="container">
      <div className="row">
        {courses.map(course => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={course.image_course.url} alt={course.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title" style={{ maxHeight: '3.6em', overflow: 'hidden' }}>{course.name}</h5> {/* Limiting to 2 lines */}
                <h6 className="card-subtitle mb-2 text-muted" style={{ maxHeight: '2.4em', overflow: 'hidden' }}>{course.teacher.profile.name}</h6> {/* Limiting to 1 line */}
                <p className="card-text" style={{ maxHeight: '7.2em', overflow: 'hidden' }}>{course.small_description}</p> {/* Limiting to 4 lines */}
                <h6>Course Progress: {course.courseprogress.total_progress_percent}%</h6>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
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