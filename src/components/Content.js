import React from 'react'
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
            action="{% url 'allcourses'%}" // Replace with the appropriate URL
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
        {/* ... The rest of your content */}
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
        {/* ... The rest of your content */}
      </section>
    </>
  );
};

export default Content;