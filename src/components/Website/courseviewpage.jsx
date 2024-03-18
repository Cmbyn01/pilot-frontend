import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../css/courseviewpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';

const CourseViewPage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`/api/courses/${courseId}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error('Error fetching course:', error);
      });

    axios.get(`/api/courses/${courseId}/comments`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, [courseId]);

  return (
    <main className="container">
      <section className="video-and-comments">
        {course.modules && course.modules.map(module => (
          <section key={module.id}>
            <div className="card">
              <div className="card-header">{module.name}</div>
              <p>
                Google App Engine (often referred to as GAE or simply App Engine) is a cloud computing platform as a service for developing and hosting web applications in Google-managed data centers. Applications are sandboxed and run across multiple servers. App Engine offers automatic scaling for web applications—as the number of requests increases for an application, App Engine automatically allocates more resources for the web application to handle the additional demand. Google App Engine primarily supports Go, PHP, Java, Python, Node.js, .NET, and Ruby applications, although it can also support other languages via "custom runtimes". The service is free up to a certain level of consumed resources and only in standard environment but not in flexible environment. Fees are charged for additional storage, bandwidth, or instance hours required by the application. It was first released as a preview version in April 2008 and came out of preview in September 2011.
              </p>
            </div>
            <hr />
          </section>
        ))}
        <section>
          <br />
          <div className="card">
            <ul className="list-group list-group-flush">
              {comments.map(comment => (
                <li key={comment.id} className="list-group-item my-3">
                  <i className="fas fa-user-astronaut fa-lg"></i>
                  <span className="comment-name">{comment.user}</span>
                  <p className="comment-text">{comment.description}</p>
                  <p className="view-replies"><i className="fas fa-arrow-down"></i> Reply</p>
                  <ul>
                    {comment.subcomments.map(subcomment => (
                      <li key={subcomment.id} className="list-group-item my-3">
                        <i className="fas fa-user-astronaut fa-lg"></i>
                        <span className="comment-name">{subcomment.user}</span>
                        <p className="comment-text">{subcomment.description}</p>
                        <p className="view-replies"><i className="fas fa-arrow-down"></i> Reply</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <br /><br />  
        </section>
      </section>
      <aside>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{course.name}</h4>
            <ul className="list-group list-group-flush">
              {course.modules && course.modules.map(module => (
                <li key={module.id} className="list-group-item">
                  <h4 className="card-title">{module.name}</h4>
                  <h5 className="card-subtitle mb-2 text-muted">Videos</h5>
                  {module.videos && module.videos.map(video => (
                    <a key={video.id} href={`/course/${courseId}/video/${video.id}`}>{video.name}</a>
                  ))}  
                  <br />
                  <h5 className="card-subtitle mb-2 text-muted">Notes</h5>
                  {module.notes && module.notes.map(note => (
                    <a key={note.id} href={`/course/${courseId}/note/${note.id}`}>Note</a>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default CourseViewPage;
