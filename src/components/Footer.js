import React, { useState } from 'react';
import '../css/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
      <footer className="m-0 border-top" style={{ height: '187px' }}>
        <div className="w-100 d-flex justify-content-between px-5 py-3 flex-wrap gap-5">
          <div>
            <h2 className="m-0 text-dark fw-bolder" style={{ fontSize: '3em' }}>
              PILOT
            </h2>
            <p className="m-0 text-dark">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
              facilis?
            </p>
          </div>
  
          <div>
            <h3 className="fw-bold">Company</h3>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-secondary fw-bold"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-secondary fw-bold"
                >
                  Become a Teacher
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-secondary fw-bold"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-secondary fw-bold"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
  
          <div className="pe-5 me-5">
            <h4 className="m-0 text-dark fw-bold">Contact</h4>
            <p className="m-0 text-danger fw-bold">
              Email: <span className="text-secondary">pilotlearningiitkgp@gmail.com</span>
            </p>
            <p className="m-0 text-danger fw-bold">
              Phone: <span className="text-secondary">+91-222525126</span>
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;