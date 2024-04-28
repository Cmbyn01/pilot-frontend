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