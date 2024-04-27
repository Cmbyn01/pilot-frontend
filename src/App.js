import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Analytics from './components/Website/Analytics';
import ContactUs from './components/Website/Contact';
import CourseViewPage from './components/Website/courseviewpage';
import CourseContent from './components/course_base';
import AllCourses from './components/Website/allcourses';
import UserProfile from './components/User/UserProfile';
import UpdateProfile from './components/User/UpdateProfile';
import CreateCourseForm from './components/Website/create_course';
import UserDetails from './components/Website/make_teacher';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<Login  />} />
          <Route path='/register' element={<Register />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/courseviewpage' element={<CourseViewPage />} />
          <Route path='/coursebase' element={<CourseContent />} />
          <Route path='/allcourses' element={<AllCourses />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/update_profile' element={<UpdateProfile />} />
          <Route path='/create_course' element={<CreateCourseForm />} />
          <Route path='/make_teacher' element={<UserDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
