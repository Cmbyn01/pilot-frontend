import React, { useState, useEffect } from 'react';
import '../css/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const OrganizationDashboard = ({ profile }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="card bg-dark text-white mb-2">
            <div className="card-header border-white">
              <h3 className="text-primary">Profile</h3>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>
                  <a className="text-white text-decoration-none d-block w-100" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="text-white text-decoration-none" href="#">
                    Update Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-dark text-white mb-2">
            <div className="card-header border-white">
              <h3 className="text-primary">Courses</h3>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>
                  <a className="text-white text-decoration-none" href="#">
                    Assign Teacher
                  </a>
                </li>
                <li>
                  <a className="text-white text-decoration-none" href="#">
                    Teacher List
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="home-content">
            <div className="overview-boxes">
              {/* Overview Boxes */}
            </div>

            <div className="sales-boxes">
              <div className="recent-sales box">
                {/* Recent Doubts Raised */}
              </div>
              <div className="top-sales box">
                {/* Most Interactive Students */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationDashboard;
