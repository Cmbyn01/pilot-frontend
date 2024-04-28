
import React, { useState, useEffect } from 'react';
import StudentDashboard from '../components/StudentDashboard';
import TeacherDashboard from '../components/TeacherDashboard';
import OrganizationDashboard from './OrganizationDashboard';
import '../css/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');
  console.log("token",token);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/user/get_profile', { //change api
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
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>Error fetching profile data.</div>;
  }

  let DashboardComponent = null;

  switch (profile.status) {
    case 'student':
      DashboardComponent = StudentDashboard;
      break;
    case 'Teacher':
      DashboardComponent = TeacherDashboard;
      break;
    case 'organization':
      DashboardComponent = OrganizationDashboard;
      break;
    default:
      return <div>Unknown user status: {profile.status}</div>;
  }

  return <DashboardComponent profile={profile} />;
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