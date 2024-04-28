// import React from 'react';

// const CourseDetails = () => {
//   const course = {
//     name: "Course Name",
//     organization: { profile: { name: "Organization Name" } },
//     teacher: { profile: { name: "Teacher Name" } },
//     tags: [{ id: 1, name: "Tag 1" }, { id: 2, name: "Tag 2" }],
//     created_at: "2024-04-27",
//     updated_at: "2024-04-28",
//     price: 100,
//     small_description: "This is a short description of the course.",
//     description: "<p>This is a longer description of the course.</p>",
//     learned: "<ul><li>Learn item 1</li><li>Learn item 2</li></ul>",
//     image_course: { url: "https://via.placeholder.com/300" },
//     enrollment_set: [{ id: 1, user: { profile: { name: "Enrolled User 1" } } }],
//     rating: 4.5,
//     videos: 10,
//     vidoes_time: "10 hours",
//     modules: 5,
//     enroller_user_count: 20,
//     courseprogress: {
//       number_of_videos_watched: 5,
//       total_number_of_videos: 10,
//       total_progress_percent: 50
//     }
//   };

//   const profile = { status: 'Student' };
//   const isAuthenticated = true;
//   const enrollHandler = () => {};

//   return (
//     <div className="container course-details" style={{ marginTop: '50px', padding: '30px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//       <div className="row">
//         <div className="col-md-8">
//           <h1 className="display-4">{course.name}</h1>
//           <p className="lead text-primary">{course.organization.profile.name}</p>
//           <p><b>Teacher</b> {course.teacher.profile.name}</p>
//           <p>
//             <b>Tags:</b>
//             {course.tags.map((tag) => (
//               <span key={tag.id} className="badge badge-secondary">
//                 {tag.name}
//               </span>
//             ))}
//           </p>
//           <p><b>Created at:</b> {course.created_at}</p>
//           <p><b>Last updated:</b> {course.updated_at}</p>
//           <p><b>Price:</b> ${course.price}</p>
//           <p>{course.small_description}</p>
//           <hr />
//           <img src={course.image_course.url} className="img-fluid mb-4" alt="Course Image" />
//           <h3 className="mb-3">Description</h3>
//           <div className="lead" dangerouslySetInnerHTML={{ __html: course.description }}></div>
//           <h3 className="mb-3">What you'll learn</h3>
//           <div dangerouslySetInnerHTML={{ __html: course.learned }}></div>
//         </div>
//         <div className="col-md-4">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="card enrolled-users">
//                 <div className="card-header bg-primary text-white">Enrolled Users</div>
//                 <div className="card-body">
//                   {course.enrollment_set.length > 0 ? (
//                     course.enrollment_set.map((enrollment) => (
//                       <p key={enrollment.id}>{enrollment.user.profile.name}</p>
//                     ))
//                   ) : (
//                     <p>No enrollments yet.</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-12 mt-4">
//               <div className="card course-progress">
//                 <div className="card-header bg-success text-white">Course Progress</div>
//                 <div className="card-body">
//                   <p>Ratings: {course.rating}</p>
//                   <p>Total number of videos: {course.videos}</p>
//                   <p>Total video hours: {course.vidoes_time}</p>
//                   <p>Total number of modules: {course.modules}</p>
//                   <p>Total number of enrolled users: {course.enroller_user_count}</p>
//                   {course.courseprogress && (
//                     <p>
//                       Progress: {course.courseprogress.number_of_videos_watched}/
//                       {course.courseprogress.total_number_of_videos} ({course.courseprogress.total_progress_percent}%)
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {profile.status === 'Student' && (
//         <div className="row mt-4">
//           <div className="col-md-8">
//             {isAuthenticated ? (
//               course.enroller_user && course.enroller_user.includes(profile.id) ? (
//                 <a href={`/coursevideoplayer/${course.id}`} className="btn btn-primary btn-lg" style={{ width: '200px' }}>
//                   Go to Course
//                 </a>
//               ) : (
//                 <button onClick={() => enrollHandler(course.id)} className="btn btn-success " style={{ width: '200px' }} >
//                   Enroll
//                 </button>
//               )
//             ) : (
//               <a href="/login" className="btn btn-primary" style={{ width: '200px' }}>
//                 Log in to Enroll
//               </a>
//             )}
//           </div>
//           <div className="col-md-4">
//             {isAuthenticated && (
//               <div>
//                 {/* Add other buttons for students here */}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CourseDetails;




import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CourseDetails = ({ courseId, profile, isAuthenticated, enrollHandler }) => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`/api/courses/${courseId}`);  //change api url
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container course-details" style={{ marginTop: '50px', padding: '30px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <div className="row">
        <div className="col-md-8">
          <h1 className="display-4">{course.name}</h1>
          <p className="lead text-primary">Organization: {course.organization.profile.name}</p>
          <p><b>Teacher:</b> {course.teacher.profile.name}</p>
          <p>
            <b>Tags:</b>
            {course.tags.map((tag) => (
              <span key={tag.id} className="badge badge-secondary">
                {tag.name}
              </span>
            ))}
          </p>
          <p><b>Created at:</b> {course.created_at}</p>
          <p><b>Last updated:</b> {course.updated_at}</p>
          <p><b>Price:</b> ${course.price}</p>
          <p>{course.small_description}</p>
          <hr />
          <img src={course.image_course_course.url} className="img-fluid mb-4" alt="Course Image" />
          <h3 className="mb-3">Description</h3>
          <div className="lead" dangerouslySetInnerHTML={{ __html: course.description }}></div>
          <h3 className="mb-3">What you'll learn</h3>
          <div dangerouslySetInnerHTML={{ __html: course.learned }}></div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <div className="card enrolled-users">
                <div className="card-header bg-primary text-white">Enrolled Users</div>
                <div className="card-body">
                  {course.enrollment_set.length > 0 ? (
                    course.enrollment_set.map((enrollment) => (
                      <p key={enrollment.id}>{enrollment.user.profile.name}</p>
                    ))
                  ) : (
                    <p>No enrollments yet.</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-4">
              <div className="card course-progress">
                <div className="card-header bg-success text-white">Course Progress</div>
                <div className="card-body">
                  <p>Ratings: {course.rating}</p>
                  <p>Total number of videos: {course.videos}</p>
                  <p>Total video hours: {course.vidoes_time}</p>
                  <p>Total number of modules: {course.modules}</p>
                  <p>Total number of enrolled users: {course.enroller_user_count}</p>
                  {course.courseprogress && (
                    <p>
                      Progress: {course.courseprogress.number_of_videos_watched}/
                      {course.courseprogress.total_number_of_videos} ({course.courseprogress.total_progress_percent}%)
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {profile.status === 'Student' && (
        <div className="row mt-4">
          <div className="col-md-8">
            {isAuthenticated ? (
              course.enroller_user && course.enroller_user.includes(profile.id) ? (
                <a href={`/coursevideoplayer/${course.id}`} className="btn btn-primary" style={{ width: '200px' }}>
                  Go to Course
                </a>
              ) : (
                <button onClick={() => enrollHandler(course.id)} className="btn btn-success" style={{ width: '200px' }}>
                  Enroll
                </button>
              )
            ) : (
              <a href="/login" className="btn btn-primary" style={{ width: '200px' }}>
                Log in to Enroll
              </a>
            )}
          </div>
        </div>
      )}
      {profile.status === 'Teacher' && (
        <div className="row mt-4">
          <div className="col-md-8">
            <a href={`/update_course/${course.id}`} className="btn btn-warning style={{ width: '200px' }} ">
              Update Course
            </a>
            <a href="/analytics" className="btn btn-info">
              Analytics
            </a>
            <a href={`/delete_course/${course.id}`} className="btn btn-danger style={{ width: '200px' }}">
              Delete Course
            </a>
          </div>
          <div className="col-md-4">
            <a href={`/create_module/${course.id}`} className="btn btn-success style={{ width: '200px' }}">
              Create Module
            </a>
          </div>
        </div>
      )}
      {!isAuthenticated && (
        <div className="col-md-8 mt-4">
          <a href="/login" className="btn btn-primary style={{ width: '200px' }}">
            Log in to Enroll
          </a>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
    
