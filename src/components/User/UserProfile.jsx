import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(`/api/profiles/${id}`);  //add api url
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

  return (
    <div className="container mt-4">
      {/* Check if profile data is available before rendering */}
      {profile && (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={profile.image_profile.url}
                      className="img-fluid rounded-circle"
                      alt={profile.name}
                    />
                  </div>
                  <div className="col-md-8">
                  <h3>{profile.name}</h3>
                    {/* Add conditionals for status and social links */}
                    {profile.status === 'Student' && <h5>Student</h5>}
                    {profile.status === 'Teacher' && <h5>Teacher</h5>}
                    {profile.status === 'Organization' && <h5>Organization</h5>}

                    <p>{profile.shortBio}</p>
                  <hr />
                  <div className="social-links">
                    {profile.github && (
                      <a href={profile.github} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {profile.youtube && (
                      <a href={profile.youtube} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                      </a>
                    )}
                    {profile.twitter && (
                      <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {profile.facebook && (
                      <a href={profile.facebook} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                      </a>
                    )}
                    {profile.instagram && (
                      <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                    {profile.linkedin && (
                      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                  </div>

                    <hr />
                    {profile.detail && <div dangerouslySetInnerHTML={{ __html: profile.detail }} />}
                    {profile.status === 'Student' && (
                      <>
                        <p><strong>Department:</strong> {profile.department}</p>
                        <p><strong>Date of Birth:</strong> {profile.date_of_birth}</p>
                      </>
                    )}
                    {profile.status === 'Teacher' && (
                      <>
                        <p><strong>Department:</strong> {profile.department}</p>
                        <p><strong>Date of Birth:</strong> {profile.date_of_birth}</p>
                        {profile.qualification && <p><strong>Qualification:</strong> {profile.qualification}</p>}
                        {profile.research_interests && (
                          <>
                            <p><strong>Research Interests:</strong></p>
                            <div dangerouslySetInnerHTML={{ __html: profile.research_interests }} />
                          </>
                        )}
                      </>
                    )}
                    {profile.status === 'Organization' && (
                      <>
                        <p><strong>Location:</strong> {profile.location}</p>
                        {profile.website && (
                          <p>
                            <strong>Website:</strong>
                            <a href={profile.website} target="_blank">{profile.website}</a>
                          </p>
                        )}
                        {profile.founded_year && (
                          <p>
                            <strong>Founded Year:</strong> {profile.founded_year}
                          </p>
                        )}
                        {profile.employees && (
                        <div className="container mt-4">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="card">
                              <img
                            src={profile.image_profile.url}
                            className="card-img-top"
                            alt={profile.name} 
                              />

                                <div className="card-body">
                                  <h5 className="card-title">
                                    {profile.name}
                                  </h5>
                                  <p className="card-text">{profile.description}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <h2>{profile.name}'s Profile</h2>
                              <hr />
                              <h4>General Information</h4>
                              <table className="table table-bordered table-striped">
                                <tbody>
                                  <tr>
                                    <th>Full Name</th>
                                    <td>{profile.name}</td>
                                  </tr>
                                  <tr>
                                    <th>Email</th>
                                    <td>{profile.email}</td>
                                  </tr>
                                  <tr>
                                    <th>Phone Number</th>
                                    <td>{profile.phone}</td>
                                  </tr>
                                  <tr>
                                    <th>Status</th>
                                    <td>{profile.status}</td>
                                  </tr>
                                  <tr>
                                    <th>Short Bio</th>
                                    <td>{profile.shortBio}</td>
                                  </tr>
                                </tbody>
                              </table>
                              <hr />
                              <h4>Organization Details</h4>
                              <table className="table table-bordered table-striped">
                                <tbody>
                                  <tr>
                                    <th>Name</th>
                                    <td>{profile.name}</td>
                                  </tr>
                                  <tr>
                                    <th>Description</th>
                                    <td>{profile.description}</td>
                                  </tr>
                                  <tr>
                                    <th>Location</th>
                                    <td>{profile.location}</td>
                                  </tr>
                                  <tr>
                                    <th>Website</th>
                                    <td>{profile.website}</td>
                                  </tr>
                                  <tr>
                                    <th>Founded Year</th>
                                    <td>{profile.founded_year}</td>
                                  </tr>
                                  <tr>
                                    <th>Number of Employees</th>
                                    <td>{profile.employees}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      )}
                      </>
                    )}
                      <div className="card-footer">
                        <Link to="/update_profile" className="btn btn-primary btn-block">Update Profile</Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
