
import React, { useState, useEffect } from 'react';
import StudentDashboard from '../components/StudentDashboard';
import TeacherDashboard from '../components/TeacherDashboard';
import OrganizationDashboard from './OrganizationDashboard';
import '../css/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Dashboard = ({ token }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user_profile, setUserProfile] = useState(JSON.parse(localStorage.getItem('user')));
  useEffect(() => {
    console.log('user_profile', user_profile);
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user_profile) {
    return <div>Error fetching profile data.</div>;
  }

  let DashboardComponent = null;

  switch (user_profile.status) {
    case 'Student':
      DashboardComponent = StudentDashboard;
      break;
    case 'Teacher':
      DashboardComponent = TeacherDashboard;
      break;
    case 'Organization':
      DashboardComponent = OrganizationDashboard;
      break;
    default:
      return <div>Unknown user status: {user_profile.status}</div>;
  }

  return <DashboardComponent profile={user_profile} />;
};

export default Dashboard;


















// import React, { useState, useEffect } from 'react';
// import UserProfile from './UserProfile';
// import MyCoursesStudent from './MyCoursesStudent';
// import TeacherOverview from './TeacherOverview';


// const Dashboard = ({ token }) => {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
        
//         const response = await fetch('/api/user/status', {     //replace api url
//           method: 'GET',  
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch user profile');
//         }

//         const profileData = await response.json();
//         setProfile(profileData);
//       } catch (error) {
//         console.error('Error fetching user profile:', error.message);
//       }
//     };

    
//     fetchUserProfile();
//   }, [token]);

//   if (!profile) {
    
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <UserProfile profile={profile} />
//       {profile.status === 'Student' && <MyCoursesStudent />}
//       {profile.status === 'Teacher' && <TeacherOverview />}
//     </div>
//   );
// };

// export default Dashboard;