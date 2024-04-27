import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CourseContent = () => {
  return (
    <div className="d-flex px-1 mt-2" style={{ height: '100vh' }}>
      <div className="w-75 overflow-y-scroll" style={{ height: '100hv' }}>
        <div className="video w-100 h-75 bg-danger">Video</div>
        <div className="nav-wrapper position-relative mb-2">
          <ul className="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-text" role="tablist">
            <li className="nav-item">
              <a className="nav-link mb-sm-3 mb-md-0 active border border-2" id="tabs-text-1-tab" data-bs-toggle="tab" href="#tabs-text-1" role="tab" aria-controls="tabs-text-1" aria-selected="true">Course Content</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mb-sm-3 mb-md-0 border border-2" id="tabs-text-2-tab" data-bs-toggle="tab" href="#tabs-text-2" role="tab" aria-controls="tabs-text-2" aria-selected="false">Notes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mb-sm-3 mb-md-0 border border-2" id="tabs-text-3-tab" data-bs-toggle="tab" href="#tabs-text-3" role="tab" aria-controls="tabs-text-3" aria-selected="false">Instructor</a>
            </li>
          </ul>
        </div>
        <div className="card border-0">
          <div className="card-body p-0">
            <div className="tab-content" id="tabcontent1">
              <div className="tab-pane fade show active" id="tabs-text-1" role="tabpanel" aria-labelledby="tabs-text-1-tab">
                <div className="px-2">
                  <div>
                    <h2>About this Course</h2>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Inventore, magni nisi porro voluptatem perspiciatis molestias
                      repellendus vitae qui ex eius recusandae minima voluptas culpa
                      dolor ducimus nobis laborum aliquam in!
                    </p>
                    <h5>More</h5>
                    <ul>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tabs-text-2" role="tabpanel" aria-labelledby="tabs-text-2-tab">
                <p>
                  Photo booth stumptown tote bag Banksy, elit small batch freegan
                  sed. Craft beer elit seitan exercitation, photo booth et 8-bit
                  kale chips proident chillwave deep v laborum. Aliquip veniam
                  delectus, Marfa eiusmod Pinterest in do umami readymade swag.
                </p>
                <p>
                  Day handsome addition horrible sensible goodness two contempt.
                  Evening for married his account removal. Estimable me disposing of
                  be moonlight cordially curiosity.
                </p>
              </div>
              <div className="tab-pane fade" id="tab
              s-text-3" role="tabpanel" aria-labelledby="tabs-text-3-tab">
                <p>
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 8-bit kale chips proident chillwave deep v laborum.
                  Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
                  readymade swag.
                </p>
                <p>
                  Day handsome addition horrible sensible goodness two contempt.
                  Evening for married his account removal. Estimable me disposing of
                  be moonlight cordially curiosity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-25 border border-1 border-dark rounded-2 position-relative" style={{ height: '100hv' }}>
        <div className="p-2 position-absolute top-0">
          <h3 className="text-danger">Course Content</h3>
        </div>
        <div className="mt-5 border-top border-dark">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Module 1: Data structure & Algorithm
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body p-0">
                  <ul className="list-unstyled m-0">
                    <li className="w-100 border border-1 border-secondary">
                      <a href="#" className="text-decoration-none p-3 d-flex text-dark fw-bold w-100 flex-column" style={{ backgroundColor: 'rgb(238, 250, 255)' }}>
                        Arrays Introduction
                        <p className="m-0 fw-normal text-danger">23 min</p>
                      </a>
                    </li>
                    <li className="w-100 border border-1 border-secondary">
                      <a href="#" className="text-decoration-none p-3 d-flex text-dark fw-bold w-100 flex-column" style={{ backgroundColor: 'rgb(238, 250, 255)' }}>
                        Arrays Introduction
                        <p className="m-0 fw-normal text-danger">23 min</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Module 2: Data structure & Algorithm
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body p-0">
                  <ul className="list-unstyled m-0">
                    <li className="w-100 border border-1 border-secondary">
                      <a href="#" className="text-decoration-none p-3 d-flex text-dark fw-bold w-100 flex-column" style={{ backgroundColor: 'rgb(238, 250, 255)' }}>
                        Arrays Introduction
                        <p className="m-0 fw-normal text-danger">23 min</p>
                      </a>
                    </li>
                    <li className="w-100 border border-1 border-secondary">
                      <a href="#" className="text-decoration-none p-3 d-flex text-dark fw-bold w-100 flex-column" style={{ backgroundColor: 'rgb(238, 250, 255)' }}>
                        Arrays Introduction
                        <p className="m-0 fw-normal text-danger">23 min</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Module 3: Data structure & Algorithm
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body p-0">
                  <ul className="list-unstyled m-0">
                    <li className="w-100 border border-1 border-secondary">
                      <a href="#" className="text-decoration-none p-3 d-flex text-dark fw-bold w-100 flex-column" style={{ backgroundColor: 'rgb(238, 250, 255)' }}>
                        Arrays Introduction
                        <p className="m-0 fw-normal text-danger">23 min</p>
                      </a>
                    </li>
                    <li className="w-100 border border-1 border-secondary">
                      <a href="#" className="text-decoration-none p-3 d-flex text-dark fw-bold w-100 flex-column" style={{ backgroundColor: 'rgb(238, 250, 255)' }}>
                        Arrays Introduction
                        <p className="m-0 fw-normal text-danger">23 min</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
