import React from 'react';
import profileImage from '../images/profile.png'
import '../css/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const UserProfile = ({ profile }) => {
  return (
    <div>
      <div className="w-100 d-flex px-5 gap-3 py-5" style={{ backgroundColor: '#1d3b53' }}>
        <div className="rounded rounded-circle">
          <img
            src={profileImage}
            height="150px"
            width="150px"
            className="rounded rounded-circle"
            alt="Profile"
          />
        </div>
        <div className="pt-1">
          <h1 className="text-white m-0">{profile.name} | {profile.status}</h1>
          <h6 className="text-white text-uppercase">{profile.department}</h6>
          <h6 className="text-white">{profile.email} | {profile.phone}</h6>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
