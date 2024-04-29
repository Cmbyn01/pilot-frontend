import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import '../../css/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import VideoPlayer from './VideoPlayer';
import CommentContainer from './CommentContainer';



const CourseContent = () => {
  const courseId=window.location.pathname.split('/')[2];
  const [courseData,setCourseData]=useState([]);
  const [videoTime, setVideoTime] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  console.log(courseId);
  const getCourseContent = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/courses/get_course_content/${courseId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      console.log('Course content:', data);
      setCourseData(data);
    } catch (error) {
      console.error('Error fetching course content:', error);
    }
  };
  useEffect(() => {
    getCourseContent();
  },[courseId]
  );
  useEffect(() => {
  }, [courseData]);

  const handleVideoSelection = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div className="d-flex px-1 mt-2" style={{ height: '100vh' }}>
      <div className="w-75 overflow-y-scroll" style={{ height: '100hv' }}>
        
        <div className="card border-0">
          <div className="card-body p-0">
            <div className="tab-content" id="tabcontent1">
              <div className="tab-pane fade show active" id="tabs-text-1" role="tabpanel" aria-labelledby="tabs-text-1-tab">
                <div className="px-2">
                  <div className='py-3'>
                  <div className="p-2 position-absolute top-0 px-3">
                        <h2 className="text-danger">Course Content</h2>
                  </div>
                  <div className="video w-100 h-75 py-5">

                    {/* pass selectedVideo to VideoPlayer */}
                    <VideoPlayer selectedVideo={selectedVideo} handleVideoSelection={handleVideoSelection} setVideoTime={setVideoTime} />
        </div>
                  <div className=" border-top border-dark">
          <div className="accordion" id="accordionExample">
            {
              courseData?.modules?.map((module, index) => (
                <div className="accordion-item">
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                      {module.name}
                    </button>
                  </h2>
                  <div id={`collapse${index}`} className="accordion-collapse collapse show" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body p-0">
                      <ul className="list-unstyled m-0">
                        {
                          courseData?.videos?.map((lesson, lessonIndex) => (
                            lesson.module === module.id && (
                              <li className="w-100 border border-1 border-secondary" key={lessonIndex}>
                                <button href="#" className="text-decoration-none p-3 d-flex text-dark fw-bold w-100 flex-column" style={{ backgroundColor: 'rgb(238, 250, 255)' }}
                                  onClick={() => handleVideoSelection(lesson)}

                                >
                                  {lesson.name}
                                  <p className="m-0 fw-normal text-danger">dfds {lesson.duration}</p>
                                </button>
                              </li>
                            )
                          ))

                        }
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            }
            {/* <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Module 1: Data structure & Algorithm
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body p-0">
                  <ul className="list-unstyled m-0">
                    <li className="w-100 border border-1 border-secondary">
                      <a href="#" className="text-decoration-none p-3 d-flex text-dark fw-bold w-100 flex-column" style={{ backgroundColor: 'rgb(238, 250, 255)' }}>
                        Arrays Introduction
                        <p className="m-0 fw-normal text-danger">23 min</p>
                      </a>
                    </li>
                    <li className="w-100 border border-1 border-secondary">
                      <a href="#" className="text-decoration-none p-3 d-flex text-dark fw-bold w-100 flex-column" style={{ backgroundColor: 'rgb(238, 250, 255)' }}>
                        Arrays Introduction
                        <p className="m-0 fw-normal text-danger">23 min</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Module 2: Data structure & Algorithm
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body p-0">
                  <ul className="list-unstyled m-0">
                    <li className="w-100 border border-1 border-secondary">
                      <a href="#" className="text-decoration-none p-3 d-flex text-dark fw-bold w-100 flex-column" style={{ backgroundColor: 'rgb(238, 250, 255)' }}>
                        Arrays Introduction
                        <p className="m-0 fw-normal text-danger">23 min</p>
                      </a>
                    </li>
                    <li className="w-100 border border-1 border-secondary">
                      <a href="#" className="text-decoration-none p-3 d-flex text-dark fw-bold w-100 flex-column" style={{ backgroundColor: 'rgb(238, 250, 255)' }}>
                        Arrays Introduction
                        <p className="m-0 fw-normal text-danger">23 min</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3">
  <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Module 3: Data structure & Algorithm
    </button>
  </h2>
  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body p-0">
      <ul className="list-unstyled m-0">
        <li className="w-100 border border-1 border-secondary">
          <a href="#" className="text-decoration-none p-3 d-flex text-dark fw-bold w-100 flex-column" style={{ backgroundColor: 'rgb(238, 250, 255)' }}>
            Arrays Introduction
            <p className="m-0 fw-normal text-danger">23 min</p>
          </a>
        </li>
        <li className="w-100 border border-1 border-secondary">
          <a href="#" className="text-decoration-none p-3 d-flex text-dark fw-bold w-100 flex-column" style={{ backgroundColor: 'rgb(238, 250, 255)' }}>
            Arrays Introduction
            <p className="m-0 fw-normal text-danger">23 min</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>


          </div>
        </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="w-25 border border-1 border-dark rounded-2 position-relative" style={{ height: '100hv' }}>
      <div className="p-2 position-relative">
          <h3 className="text-danger px-5" >Comments</h3>
         {/* Render the CommentContainer component */}
         <CommentContainer videoTime={videoTime}  video_id={selectedVideo?.id}/>
       </div>
      </div>
    </div>
  );
};

export default CourseContent;




