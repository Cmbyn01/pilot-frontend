// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// function UserDetails() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [showSuccess, setShowSuccess] = useState(false);
//     const [showError, setShowError] = useState(false);

//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     const profiles = [
//         { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', user: { is_staff: false } },
//         { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '9876543210', user: { is_staff: true } },
//         // Add more dummy data if needed
//     ];

//     const filteredProfiles = profiles.filter(profile =>
//         profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         profile.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const makeTeacher = async (profileId) => {
//         try {
//             // Simulate API call
//             console.log(`Making user with ID ${profileId} a teacher...`);

//             // Simulate success
//             setShowSuccess(true);
//             setTimeout(() => setShowSuccess(false), 3000); // Hide success message after 3 seconds
//         } catch (error) {
//             console.error('Error making user a teacher:', error.message);
//             // Simulate error
//             setShowError(true);
//             setTimeout(() => setShowError(false), 3000); // Hide error message after 3 seconds
//         }
//     };

//     return (
//         <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
//             <div className="container-fluid mt-3 flex-grow-1">
//                 <h1 className="mb-3 text-center">User Details</h1>
//                 <div className="row mb-3">
//                     <div className="col-md-6 mx-auto py-5 ">
//                         <form>
//                             <div className="input-group">
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="Search by name or email"
//                                     value={searchTerm}
//                                     onChange={handleSearchChange}
//                                     style={{ maxWidth: '500px' }}
//                                 />
//                                 <div className="input-group-append px-3">
//                                     <button className="btn btn-outline-secondary ml-2" type="button">
//                                         <i className="fa fa-search"></i>
//                                     </button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>

//                 <div className="table-responsive">
//                     <table className="table table-hover table-bordered">
//                         <thead>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Phone</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredProfiles.map(profile => (
//                                 <tr key={profile.id}>
//                                     <td>{profile.name}</td>
//                                     <td>{profile.email}</td>
//                                     <td>{profile.phone}</td>
//                                     <td>
//                                         <Link to={`/profile/${profile.id}`} className="btn btn-primary btn-sm mr-2">View Full Profile</Link>
//                                         {!profile.user.is_staff && (
//                                             <button
//                                                 onClick={() => makeTeacher(profile.id)}
//                                                 className="btn btn-success btn-sm "
//                                             >
//                                                 Make Teacher
//                                             </button>
//                                         )}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 {showSuccess && (
//                     <div className="alert alert-success text-center" role="alert">
//                         User is now a teacher
//                     </div>
//                 )}

//                 {showError && (
//                     <div className="alert alert-danger text-center" role="alert">
//                         Failed to make user a teacher
//                     </div>
//                 )}
//             </div>
//             <footer className="footer mt-auto py-3 bg-light text-center">
//                 <div className="container">
//                     <span className="text-muted">Place your footer content here.</span>
//                 </div>
//             </footer>
//         </div>
//     );
// }

// export default UserDetails;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function UserDetails({ profiles }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProfiles = profiles.filter(profile =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const makeTeacher = async (profileId) => {
        try {
            const response = await fetch(`/api/make_teacher/${profileId}`, {  //change api url
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to make user a teacher');
            }

            // Handle success
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000); // Hide success message after 3 seconds
        } catch (error) {
            console.error('Error making user a teacher:', error.message);
            // Handle error
            setShowError(true);
            setTimeout(() => setShowError(false), 3000); // Hide error message after 3 seconds
        }
    };

return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <div className="container-fluid mt-3 flex-grow-1">
            <h1 className="mb-3 text-center">User Details</h1>
            <div className="row mb-3">
                <div className="col-md-6 mx-auto py-5 ">
                    <form>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by name or email"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                style={{ maxWidth: '500px' }}
                            />
                            <div className="input-group-append px-3">
                                <button className="btn btn-outline-secondary ml-2" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProfiles.map(profile => (
                            <tr key={profile.id}>
                                <td>{profile.name}</td>
                                <td>{profile.email}</td>
                                <td>{profile.phone}</td>
                                <td>
                                    <Link to={`/profile/${profile.id}`} className="btn btn-primary btn-sm mr-2">View Full Profile</Link>
                                    {!profile.user.is_staff && (
                                        <button
                                            onClick={() => makeTeacher(profile.id)}
                                            className="btn btn-success btn-sm "
                                        >
                                            Make Teacher
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showSuccess && (
                <div className="alert alert-success text-center" role="alert">
                    User is now a teacher
                </div>
            )}

            {showError && (
                <div className="alert alert-danger text-center" role="alert">
                    Failed to make user a teacher
                </div>
            )}
        </div>
        <footer className="footer mt-auto py-3 bg-light text-center">
            <div className="container">
                <span className="text-muted">Place your footer content here.</span>
            </div>
        </footer>
    </div>
);
}
export default UserDetails;