import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import SideBar from './SideBar';
import CommentContainer from './CommentContainer';
import QuizModal from './QuizModal'; 
import '../../css/CoursePage.css';

const CoursePage = () => {
  const [courseVideos, setCourseVideos] = useState([
    { 
      id: 1, 
      title: 'Course 1 Video 1', 
      url: '/Shivesh2.mp4', 
      quizzes: [
        { id: 1, time: 10, shown: false }, // Quiz at 10s
        { id: 2, time: 66, shown: false }, // Quiz at 66s
      ]
    },
    { 
      id: 2, 
      title: 'Course 1 Video 2', 
      url: '/video1.mp4', 
      quizzes: [
        // Add quizzes for the second video as needed
      ]
    },
    // Add more courses and videos as needed
  ]);

  const [selectedVideo, setSelectedVideo] = useState(courseVideos[0]);
  const [videoTime, setVideoTime] = useState(0); 
  const [showQuizModal, setShowQuizModal] = useState(false); // State to control quiz modal
  const [isVideoPlaying, setIsVideoPlaying] = useState(true); // State to control video playback
  const playerRef = useRef(null);

  const handleVideoSelection = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    const checkQuizTime = () => {
      courseVideos.forEach(video => {
        video.quizzes.forEach(quiz => {
          // Round the videoTime to match the quiz time and then compare
          const roundedVideoTime = Math.floor(videoTime);
          if (roundedVideoTime === quiz.time && !quiz.shown) {
            setShowQuizModal(true);
            setIsVideoPlaying(false); // Pause the video
            setCourseVideos(prevVideos =>
              prevVideos.map(prevVideo =>
                prevVideo.id === video.id
                  ? {
                      ...prevVideo,
                      quizzes: prevVideo.quizzes.map(prevQuiz =>
                        prevQuiz.id === quiz.id ? { ...prevQuiz, shown: true } : prevQuiz
                      )
                    }
                  : prevVideo
              )
            );
          }
        });
      });
    };

    const interval = setInterval(checkQuizTime, 1000); // Check every second
    return () => clearInterval(interval);
  }, [videoTime, courseVideos]);

  const handleQuizClose = () => {
    setShowQuizModal(false);
    setIsVideoPlaying(true); // Resume the video
  };
 
  return (
    <div className="container">
      {/* Render SideBar with the list of courses */}
      <SideBar
        courseVideos={courseVideos}
        handleVideoSelection={handleVideoSelection}
      />

      <div className="content">
        <h1>Course Video Player</h1>
        <div>
          <ReactPlayer
            ref={playerRef}
            url={selectedVideo.url}
            width="100%"
            height="100%"
            controls={true}
            playing={isVideoPlaying} // Control video playback
            onProgress={(progress) => {
              setVideoTime(progress.playedSeconds);
            }}
          />
        </div>
      </div>

      {/* Pass videoTime to CommentContainer */}
      <CommentContainer videoTime={videoTime} />

      {/* Render the quiz modal */}
      <QuizModal
        show={showQuizModal}
        handleClose={handleQuizClose}
        // Add any other props needed for the QuizModal component
      />
    </div>
  );
};

export default CoursePage;
