import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';
import MyCoursesStudent from './MyCoursesStudent';
import TeacherOverview from './TeacherOverview';
import '../css/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Dashboard = ({ token }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        
        const response = await fetch('/api/user/status', {     //replace api url
          method: 'GET',  
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const profileData = await response.json();
        setProfile(profileData);
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
      }
    };

    
    fetchUserProfile();
  }, [token]);

  if (!profile) {
    
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UserProfile profile={profile} />
      {profile.status === 'Student' && <MyCoursesStudent />}
      {profile.status === 'Teacher' && <TeacherOverview />}
    </div>
  );
};

export default Dashboard;
