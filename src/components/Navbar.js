// src/components/Navbar.js
import React, { useState } from 'react';
import '../css/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = ({ searchQuery, handleSearchChange, handleSearchSubmit, user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 py-2 w-100 mt-0" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px", zIndex: 1000 }}>
      <div className="container-fluid">
        <a className="navbar-brand fs-2 fw-bolder" href="/">PILOT</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="w-75 d-flex justify-content-between flex-wrap">
            <div className="d-flex align-items-center">
              <ul className="d-flex m-0 list-unstyled">
                <li>
                  <a className="text-dark px-3 fs-3 fw-bold text-decoration-none" href="/">Home</a>
                </li>
                <li>
                  <a className="text-dark px-3 fs-3 fw-bold text-decoration-none" href="/contact">Contact</a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark px-3 fs-3 fw-bold" href="/allcourses">
                    Courses
                  </a>
                </li>
              </ul>
            </div>

            <form method="GET" action="/allcourses">
              <div className="position-relative" style={{ width: "100%" }}>
                <input
                  type="text"
                  name="search_query"
                  value={searchQuery}
                  placeholder="Search Course"
                  className="w-100 px-2 py-2 rounded rounded-3 border border-2 border-secondary"
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="btn position-absolute"
                  style={{ right: "2px", top: "4px", bottom: "5px" }}
                  onClick={handleSearchSubmit}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
            
              <div className="d-flex align-items-center gap-2">
                {/* <button className="btn p-0 rounded rounded-3">
                  <a
                    className="btn text-decoration-none text-white"
                    style={{ backgroundColor: "#1d3b53" }}
                    href="/logout"
                  >
                    Logout
                  </a>
                </button> */}
                <button className="btn p-0 rounded rounded-3">
                  <a
                    className="btn text-decoration-none text-white"
                    style={{ backgroundColor: "#1d3b53" }}
                    href="/dashboard"
                  >
                    Dashboard
                  </a>
                </button>
              </div>
            
              <div className="d-flex align-items-center gap-2">
                <button className="btn p-0 rounded rounded-3">
                  <a
                    className="btn text-decoration-none text-white"
                    style={{ backgroundColor: "#1d3b53" }}
                    href="/login"
                  >
                    Login
                  </a>
                </button>
                <button className="btn p-0 rounded rounded-3">
                  <a
                    className="btn text-white text-decoration-none"
                    style={{ backgroundColor: "#1d3b53" }}
                    href="/register"
                  >
                    Register
                  </a>
                </button>
              </div>
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
