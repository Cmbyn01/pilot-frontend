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
import VideoPlayer from './components/Website/VideoPlayer';
import CourseVideoPlayer from './components/Website/courseVideoPlayer';
import CommentContainer from './components/Website/CommentContainer';
import Comment from './components/Website/Comment';
import CourseViewPage from './components/Website/courseviewpage';
import CourseContent from './components/course_base';
import AllCourses from './components/Website/allcourses';
import UserProfile from './components/User/UserProfile';
import UserProfileID from './components/UserProfileID';
import UpdateProfile from './components/User/UpdateProfile';
import CreateCourseForm from './components/Website/create_course';
import UserDetails from './components/Website/make_teacher';
import DeleteCourse from './components/Website/delete_course';
import CourseDetails from './components/Website/course_detail';
import CoursesList from './components/Website/courses';
import UpdateCourseForm from './components/Website/update_course';
import CreateModule from './components/Website/create_module';
import DeleteModule from './components/Website/delete_moule';
import QuizModal from './components/Website/QuizModal';
import TeacherDashboard from './components/TeacherDashboard';


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
          <Route path='/videoplayer' element={<VideoPlayer />} />
          <Route path='/coursevideoplayer/:id' element={<CourseVideoPlayer />} />
          {/* <Route path='/courseviewpage' element={<CourseViewPage />} /> */}
          {/* <Route path='/coursebase' element={<CourseContent />} /> */}
          {/* <Route path='/courseviewpage' element={<CourseViewPage />} /> */}
          {/* <Route path='/coursebase' element={<CourseContent />} /> */}
          <Route path='/allcourses' element={<AllCourses />} />
          <Route path='/profile/:profileId' element={<UserProfileID />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/update_profile' element={<UpdateProfile />} />
          <Route path='/create_course' element={<CreateCourseForm />} />
          <Route path='/make_teacher' element={<UserDetails />} />
          <Route path='/delete_course' element={<DeleteCourse />} />

          <Route path='/course_detail/:id' element={<CourseDetails />} />
          <Route path='/courses' element={<CoursesList />} />
          <Route path='/update_course/:id' element={<UpdateCourseForm />} />
          <Route path='/create_module' element={<CreateModule />} />
          <Route path='/delete_course/:id' element={<DeleteCourse />} />
          <Route path='/delete_module/:id' element={<DeleteModule />} />
          <Route path='/quiz' element={<QuizModal />} />
          <Route path='/teacher_dashboard' element={<TeacherDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
