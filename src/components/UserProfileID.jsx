import React, { useState, useEffect } from 'react';
import profileImage from '../images/profile.png';
import '../css/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserProfile = ({match}) => {
  const [profile, setProfile] = useState(null);
  const {profileId} = useParams();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/user/profile/${profileId}`);
        setProfile(response.data.profile);
      } catch (error) {
        console.error('Error fetching profile details:', error);
      }
    };

    fetchProfile();
  }, [profileId]);

  return (
    <div>
      {profile && (
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
      )}
    </div>
  );
};

export default UserProfile;
