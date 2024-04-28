import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const CreateCourseForm = () => {
  const [courseData, setCourseData] = useState({
    name: '',
    desc: '',
    image: null,
    price: '',
    small_desc: '',
    learned: '',
    tags: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCourseData({ ...courseData, image: file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', courseData.name);
      formData.append('desc', courseData.desc);
      formData.append('image', courseData.image);
      formData.append('price', courseData.price);
      formData.append('small_desc', courseData.small_desc);
      formData.append('learned', courseData.learned);
      formData.append('tags', courseData.tags);

      await axios.post('http://127.0.0.1:8000/courses/course/create_course/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'X-CSRFToken': 'csrftoken'
        }
      });

      // Reset form data after submission
      setCourseData({
        name: '',
        desc: '',
        image: null,
        price: '',
        small_desc: '',
        learned: '',
        tags: ''
      });
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-danger">Create a Course</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group my-2">
          <label htmlFor="name">Course Name</label>
          <input
            type="text"
            className="form-control border-dark"
            id="name"
            name="name"
            value={courseData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="desc">Description</label>
          <textarea
            className="form-control border-dark"
            id="desc"
            name="desc"
            value={courseData.desc}
            onChange={handleInputChange}
            rows="3"
            required
          ></textarea>
        </div>
        <div className="form-group my-2">
          <label htmlFor="image_course">Image</label>
          <input
            type="file"
            className="form-control-file"
            id="image_course"
            name="image_course"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control border-dark"
            id="price"
            name="price"
            value={courseData.price}
            onChange={handleInputChange}
            step="0.01"
            min="0"
            required
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="small_desc">Short Description</label>
          <input
            type="text"
            className="form-control border-dark"
            id="small_desc"
            name="small_desc"
            value={courseData.small_desc}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="learned">What will you learn</label>
          <textarea
            className="form-control border-dark"
            id="learned"
            name="learned"
            value={courseData.learned}
            onChange={handleInputChange}
            rows="3"
          ></textarea>
        </div>
        <div className="form-group my-2">
          <label htmlFor="tags">Tags (separate by comma)</label>
          <input
            type="text"
            className="form-control border-dark"
            id="tags"
            name="tags"
            value={courseData.tags}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">Create</button>
      </form>
    </div>
  );
};

export default CreateCourseForm;
