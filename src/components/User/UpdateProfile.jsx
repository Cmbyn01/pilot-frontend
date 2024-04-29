import React, { useState, useEffect } from 'react';
import { useNavigate ,useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    shortBio: '',
    department: '',
    dateOfBirth: '',
    grade: '',
    qualification: '',
    researchInterests: '',
    location: '',
    website: '',
    foundedYear: '',
    employees: '',
    image_profile: null,
    github: '',
    facebook: '',
    imageprofile: '',
    instagram: '',
    linkedin: '',
    twitter: '',
    youtube: '',
    image_profile: '',
  });

  useEffect(() => {

    const data1 = localStorage.getItem("user")
    const data = JSON.parse(data1)

    setProfile(data);
    setFormData({ ...formData, ...data });
    //fetchProfileData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image_profile: e.target.files[0] });
  };
  let csrfcookie = function () {  // for django csrf protection
    let cookieValue = null,
      name = "csrftoken";
    if (document.cookie && document.cookie !== "") {
      let cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) == (name + "=")) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (key === 'image_profile')
        console.log('image_profile:', formData[key]);
      else if (formData[key] !== '' && formData[key] !== null)
        formDataToSend.append(key, formData[key]);
      }
      const user_token = localStorage.getItem('token');
      const myHeaders = new Headers(); 
    myHeaders.append("Authorization", "Bearer " + user_token);
    myHeaders.append("Cookie", "csrftoken=" + csrfcookie());
    myHeaders.append("X-CSRFToken", csrfcookie());

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      redirect: "follow",
      body: formDataToSend,
    };

    fetch("http://127.0.0.1:8000/user/update_profile/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      {profile && (
        <div style={{ width: '50%' }}>
          <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ marginBottom: '1rem' }}>Update Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="image_profile">Profile Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="image_profile"
                  name="image_profile"
                  onChange={handleFileChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="shortBio">Short Bio</label>
                <textarea
                  className="form-control"
                  id="shortBio"
                  name="shortBio"
                  rows="3"
                  value={formData.shortBio}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="name">Github</label>
                <input
                  type="text"
                  className="form-control"
                  id="github"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                />
              </div>
              {/* Render fields based on status */}
              {profile.status === 'Student' && (
                <>
                  <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <input
                      type="text"
                      className="form-control"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="grade">Grade</label>
                    <input
                      type="text"
                      className="form-control"
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              )}
              {profile.status === 'Organization' && (
                <>
                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      className="form-control"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="foundedYear">Founded Year</label>
                    <input
                      type="text"
                      className="form-control"
                      id="foundedYear"
                      name="foundedYear"
                      value={formData.foundedYear}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="employees">Number of Employees</label>
                    <input
                      type="text"
                      className="form-control"
                      id="employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              )}
              {profile.status === 'Teacher' && (
                <>
                  <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <input
                      type="text"
                      className="form-control"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="qualification">Qualification</label>
                    <input
                      type="text"
                      className="form-control"
                      id="qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="researchInterests">Research Interests</label>
                    <textarea
                      className="form-control"
                      id="researchInterests"
                      name="researchInterests"
                      rows="3"
                      value={formData.researchInterests}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </>
              )}
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
