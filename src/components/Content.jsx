import React from 'react';
import '../css/Home.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import homeImage from '../images/home.jpg';

const Content = () => {
  return (
    <>
      <main className="d-flex align-items-center justify-content-end pt-1">
        <div className="w-50 d-flex flex-column align-items-center justify-content-end px-3">
          <h1 className="w-75 text-end fw-bolder">
            GROW YOUR
            <span className="text-danger" style={{ fontSize: '2em' }}>
              SKILL
            </span>{' '}
            <br />
            LEARN FROM <span className="text-danger">PILOT</span>
          </h1>
          <form
            className="d-flex flex-column w-75 justify-content-end align-items-end"
            action="/api/courses" // Replace with the appropriate URL
            method="GET"
            id="search_form"
          >
            <input
              type="text"
              className="p-2 rounded rounded-2 mb-2 w-100 py-3 px-3 border border-2 border-secondary"
              placeholder="Search for Course"
              id="search_form_query"
            />
            <div className="d-flex justify-content-end gap-2">
              <button
                className="btn btn-success fs-5 rounded rounded-pill py-0 px-3"
                style={{ width: 'fit-content' }}
              >
                <i className="fa-solid fa-play"></i> Watch Intro
              </button>
              <button
                className="btn btn-outline-danger fs-5 rounded rounded-pill"
                style={{ width: 'fit-content' }}
                id="search_form_button"
                type="submit"
              >
                Search Course
              </button>
            </div>
          </form>
        </div>
        <div className="w-50">
          <img src={homeImage} alt="image" className="w-75" />
        </div>
      </main>

      <section className="p-5 pt-2 d-flex gap-5 justify-content-center flex-wrap">
        <div
          className="d-flex justify-content-center gap-3 align-items-center p-3 rounded-3"
          style={{ width: '280px', backgroundColor: '#fef6e0' }}
        >
          <i className="fa-solid fa-laptop fs-1" style={{ color: '#f7c32e' }}></i>
          <div>
            <h3 className="m-0">10K+</h3>
            <h4 className="m-0">Online Courses</h4>
          </div>
        </div>
        <div
          className="d-flex justify-content-center gap-3 align-items-center p-3 rounded-3"
          style={{ width: '280px', backgroundColor: '#e8ebed' }}
        >
          <i className="fa-solid fa-user fs-1" style={{ color: '#1d3b53' }}></i>
          <div>
            <h3 className="m-0">200+</h3>
            <h4 className="m-0">Expert Tutors</h4>
          </div>
        </div>
        <div
          className="d-flex justify-content-center gap-3 align-items-center p-3 rounded-3"
          style={{ width: '280px', backgroundColor: '#f0ecf9' }}
        >
          <i className="fas fa-user-graduate fs-1" style={{ color: '#6f42c1' }}></i>
          <div>
            <h3 className="m-0">6K+</h3>
            <h4 className="m-0">Students</h4>
          </div>
        </div>
        <div
          className="d-flex justify-content-center gap-3 align-items-center p-3 rounded-3"
          style={{ width: '280px', backgroundColor: '#e7f6f8' }}
        >
          <i className="fa-solid fa-circle-check fs-1" style={{ color: '#17a2b8' }}></i>
          <div>
            <h3 className="m-0">5K+</h3>
            <h4 className="m-0">Certified Courses</h4>
          </div>
        </div>
      </section>

      <section className="p-5 mb-4">
        <div className="mb-3 d-flex justify-content-between">
          <h1 className="fw-bolder">
            Popular <span className="text-danger">Courses</span>
          </h1>

          <a
            className="btn px-4 text-white d-flex align-items-center justify-content-center py-0 fw-bold"
            style={{ backgroundColor: '#1d3b53' }}
            href="/allcourses"
          >
            Explore All
          </a>
        </div>
      </section>

      <section className="p-5 pt-2 d-flex gap-5 justify-content-center flex-wrap">
        {/* New Section */}
        <section className="w-75 m-auto d-flex justify-content-between rounded rounded-3 p-4 align-items-center mb-4" style={{ backgroundColor: '#17a2b8' }}>
          <div className="w-75">
            <h1 className="text-white fw-bolder">Become an Instructor!</h1>
            <p className="text-white m-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ipsa et odit
              excepturi voluptatibus, eaque ad eum facilis id repellat? Temporibus
              voluptatibus perspiciatis odio itaque error omnis, necessitatibus aut
              vitae.
            </p>
          </div>
          <div>
            <button className="btn btn-danger">Start Teaching Today</button>
          </div>
        </section>
        {/* End of New Section */}
      </section>
    </>
  );
};

export default Content;
