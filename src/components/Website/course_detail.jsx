import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const CourseDetails = ({ course, profile, isAuthenticated, enrollHandler, loginHandler }) => {
  return (
    <div className="container course-details">
      <div className="row">
        <div className="col-md-8">
          <h1 className="display-4">{course.name}</h1>
          <p className="lead text-muted">{course.organization.profile.name}</p>
          <p>Created by: {course.teacher.profile.name}</p>
          <p>
            Tags:
            {course.tags.map((tag) => (
              <span key={tag.id} className="badge badge-secondary">
                {tag.name}
              </span>
            ))}
          </p>
          <p>Created at: {course.created_at}</p>
          <p>Last updated: {course.updated_at}</p>
          <p>Price: ${course.price}</p>
          <p>{course.small_description}</p>
          <hr />
          <img src={course.image_course_course.url} className="img-fluid mb-4" alt="Course Image" />
          <h3 className="mb-3">Description</h3>
          <div className="lead" dangerouslySetInnerHTML={{ __html: course.description }}></div>
          <h3 className="mb-3">What you'll learn</h3>
          <div dangerouslySetInnerHTML={{ __html: course.learned }}></div>
        </div>
        <div className="col-md-4">
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
          <div className="card mt-4 course-progress">
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
      {profile.status === 'Student' && (
        <div className="col-md-8 mt-4">
          {isAuthenticated ? (
            course.enroller_user.includes(profile.id) ? (
              <a href={`/coursevideoplayer/${course.id}`} className="btn btn-primary">
                Go to Course
              </a>
            ) : (
              <button onClick={() => enrollHandler(course.id)} className="btn btn-success">
                Enroll Now
              </button>
            )
          ) : (
            <a href="/login" className="btn btn-primary">
              Log in to Enroll
            </a>
          )}
        </div>
      )}
      {profile.status === 'Teacher' && (
        <div className="row mt-4">
          <div className="col-md-8">
            <a href={`/update_course/${course.id}`} className="btn btn-warning">
              Update Course
            </a>
            <a href="/analytics" className="btn btn-info">
              Analytics
            </a>
            <a href={`/delete_course/${course.id}`} className="btn btn-danger">
              Delete Course
            </a>
          </div>
          <div className="col-md-4">
            <a href={`/create_module/${course.id}`} className="btn btn-success">
              Create Module
            </a>
            <a href={`/course_modules/${course.id}`} className="btn btn-primary">
              Detailed Module
            </a>
          </div>
        </div>
      )}
      {!isAuthenticated && (
        <div className="col-md-8 mt-4">
          <a href="/login" className="btn btn-primary">
            Log in to Enroll
          </a>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
