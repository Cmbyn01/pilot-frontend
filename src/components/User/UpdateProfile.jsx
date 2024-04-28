import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProfile = () => {
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
    profileImage: null,
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(`/api/profiles/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const data = await response.json();
        setProfile(data);
        setFormData({ ...formData, ...data });
      } catch (error) {
        console.error('Error fetching profile:', error.message);
      }
    };

    fetchProfileData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      const response = await fetch(`/api/profiles/${id}`, {
        method: 'PUT',
        body: formDataToSend,
      });
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      window.location.href = `/user_profile/${id}`;
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      {profile && (
        <div style={{ width: '50%' }}>
          <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ marginBottom: '1rem' }}>Update Profile</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="profileImage">Profile Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="profileImage"
                  name="profileImage"
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
