import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CKEditor from 'ckeditor4-react'; 

const UpdateProfile = () => {
  const { id } = useParams(); 
  const [profile, setProfile] = useState({
    name: '',
    image_profile: null,
    shortBio: '',
    detail: '',
    github: '',
    youtube: '',
    twitter: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    department: '',
    date_of_birth: '',
    qualification: '',
    bio: '',
    research_interests: '',
    location: '',
    website: '',
    employees: 0,
    founded_year: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    image_profile: null,
    shortBio: '',
    detail: '',
    github: '',
    youtube: '',
    twitter: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    department: '',
    date_of_birth: '',
    qualification: '',
    bio: '',
    research_interests: '',
    location: '',
    website: '',
    employees: 0,
    founded_year: '',
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(`/api/profiles/${id}`); //change url
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
  
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error.message);
        
      }
    };
  
    // Call the fetchProfileData function
    fetchProfileData();
  }, [id]);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image_profile: e.target.files[0] });
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setFormData({ ...formData, detail: data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your form submission logic here
    console.log('Form submitted:', formData);

    // Clear form data after successful submission
    setFormData({
      name: '',
      image_profile: null,
      shortBio: '',
      detail: '',
      github: '',
      youtube: '',
      twitter: '',
      facebook: '',
      instagram: '',
      linkedin: '',
      department: '',
      date_of_birth: '',
      qualification: '',
      bio: '',
      research_interests: '',
      location: '',
      website: '',
      employees: 0,
      founded_year: '',
    });
  };

  return (
    <div>
      <h1 className="text-danger px-5 py-3">Update Profile</h1>
      <form method="POST" className="px-5" encType="multipart/form-data" onSubmit={handleSubmit}>
        {/* Render profile data in the form */}
        <div className="form-group my-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control border-dark"
            placeholder={profile.name}
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="image_profile">Profile Image:</label>
          <input
            type="file"
            name="image_profile"
            className="form-control-file"
            onChange={handleImageChange}
          />
        </div>
        {/* Add other form fields */}
        {/* <div className="form-group my-2">
          <label htmlFor="detail">Detail:</label>
          <CKEditor
            data={formData.detail}
            onChange={handleEditorChange}
          />
        </div> */}
        {/* Add other form fields */}
        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
