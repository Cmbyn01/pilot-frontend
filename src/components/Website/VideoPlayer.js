import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import '../../css/VideoPlayer.css';
import '../../css/Home.css'
const VideoPlayer = () => {
  const [courseVideos, setCourseVideos] = useState([
    { id: 1, title: 'Course 1 Video 1', url: '/Shivesh2.mp4' },
    { id: 2, title: 'Course 1 Video 2', url: '/video1.mp4' },
    // Add more courses and videos as needed 
  ]);

  const [comments, setComments] = useState([]); // State variable for comments
  const [newComment, setNewComment] = useState('');


    // Function to handle adding a reply to a comment
    const addReply = (commentId, newReply) => {
      const timestamp = Date.now(); // Generate timestamp for the reply
    const replyObj = { id: commentId + '_' + timestamp, text: newReply, timestamp, replies: [] };
      const updatedComments = updateComments(comments, commentId, replyObj);
      setComments(updatedComments);
      setNewComment('');
    };
  
    // Helper function to update comments with new replies
    const updateComments = (commentsArray, commentId, reply) => {
      return commentsArray.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, replies: [...comment.replies, reply] };
        } else if (comment.replies && comment.replies.length > 0) {
          return { ...comment, replies: updateComments(comment.replies, commentId, reply) };
        }
        return comment;
      });
    };
  

  const [selectedVideo, setSelectedVideo] = useState(courseVideos[0]);
  const playerRef = useRef(null);

  const handleVideoSelection = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      {/* <div className="sidebar">
        <h2>Courses</h2>
        <ul>
          {courseVideos.map((video) => (
            <li key={video.id}>
              <button onClick={() => handleVideoSelection(video)}>
                {video.title}
              </button>
            </li>
          ))}
        </ul>
      </div> */}
      

      <div className="content">
  {/* <h1>Course Video Player</h1> */}
  <div className="video-player-container">
    <div className="video-player" >
      <ReactPlayer
        ref={playerRef}
        url={selectedVideo.url}
        width="100%"
        height="90%"
        controls={true}
      />
    </div>
    
   
  </div>
</div>

    </div>
  );
};

export default VideoPlayer;
