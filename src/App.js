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

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/videoplayer' element={<VideoPlayer />} />
          <Route path='/coursevideoplayer' element={<CourseVideoPlayer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
