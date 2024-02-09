import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
                    <p>{profile.shortBio}</p>
                    {/* Add conditional rendering for social links */}
                    <hr />
                    {profile.detail && <div dangerouslySetInnerHTML={{ __html: profile.detail }} />}
                    {/* Add conditional rendering for specific status details */}
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
                          <p>
                            <strong>Number of Employees:</strong> {profile.employees}
                          </p>
                        )}
                      </>
                    )}
                    
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
