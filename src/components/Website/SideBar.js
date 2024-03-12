// SideBar.js
import React from 'react';
import '../../css/SideBar.css';

const SideBar = ({ courseVideos, handleVideoSelection }) => {
  return (
    <div className="sidebar">
      <h2>Courses</h2>
      <ul>
        {courseVideos.map((video) => (
          <li key={video.id}>
            <a
              href="#"
              onClick={() => handleVideoSelection(video)}
            >
              {video.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
