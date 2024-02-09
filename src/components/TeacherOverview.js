import React, { useState, useEffect } from 'react';
import '../css/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const TeacherOverview = () => {
  const [overviewData, setOverviewData] = useState({});

  useEffect(() => {
    fetch('https://your-backend-api.com/teacher/overview') //replace api url
      .then((response) => response.json())
      .then((data) => setOverviewData(data))
      .catch((error) => console.error('Error fetching teacher overview data:', error));
  }, []); 

  return (
    <div className="home-content">
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Content</div>
            <div className="number">{overviewData.totalContent} Hours</div>
            <div className="indicator">
              <i className='bx bx-up-arrow-alt'></i>
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className='bx bx-cart-alt cart'></i>
        </div>
      </div>

      <div className="sales-boxes">
        <div className="recent-sales box">
          <div className="title">Recent Doubts Raised</div>
          <div className="sales-details">
            <ul className="details">
              <li className="topic">Date</li>
              {overviewData.recentDoubts.map((doubt) => (
                <li key={doubt.id}><a href="#">{doubt.date}</a></li>
              ))}
            </ul>
            <ul className="details">
              <li className="topic">Students</li>
              {overviewData.recentDoubts.map((doubt) => (
                <li key={doubt.id}><a href="#">{doubt.student}</a></li>
              ))}
            </ul>
            <ul className="details">
              <li className="topic">Status</li>
              {overviewData.recentDoubts.map((doubt) => (
                <li key={doubt.id}><a href="#">{doubt.status}</a></li>
              ))}
            </ul>
            <ul className="details">
              <li className="topic">Wait Time</li>
              {overviewData.recentDoubts.map((doubt) => (
                <li key={doubt.id}><a href="#">{doubt.waitTime}</a></li>
              ))}
            </ul>
          </div>
          <div className="button">
            <a href="#">See All</a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TeacherOverview;
