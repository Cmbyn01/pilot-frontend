import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactUs = () => {
  return (
    <div style={{ height: '100%', marginBottom: '200px' }} className="d-flex flex-column align-items-center justify-content-center w-100">
      <div className="text-center py-3">
        <h3 className="text-primary m-0 underline">Contact Us</h3>
        <h1 className="fw-bolder">We are here to help!</h1>
      </div>
      <div className="d-flex justify-content-center gap-3 w-100">
        <div className="w-25 border border-1 rounded rounded-3 d-flex align-items-center justify-content-center py-5 shadow flex-column text-white" style={{ background: '#1d3b53' }}>
          <h3 className="fw-bolder">Contact Address</h3>
          <p className="m-0">🏠 2492 Centennial NW, Acworth, GA, 30102</p>
        </div>
        <div className="w-25 border border-1 rounded rounded-3 d-flex align-items-center justify-content-center py-5 shadow flex-column text-white" style={{ background: '#1d3b53' }}>
          <h3 className="fw-bolder">Contact Mail</h3>
          <p className="m-0">📩 example@email.com</p>
        </div>
        <div className="w-25 border border-1 rounded rounded-3 d-flex align-items-center justify-content-center py-5 shadow flex-column text-white" style={{ background: '#1d3b53' }}>
          <h3 className="fw-bolder">Contact Phone</h3>
          <p className="m-0">📞 +896-789-546</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
