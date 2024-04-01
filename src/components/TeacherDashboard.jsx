import React, { useState, useEffect } from 'react';
import '../css/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const TeacherDashboard = ({ profile }) => {
  return (
    <div>
      <div className="w-100 d-flex px-5 gap-3 py-5" style={{ backgroundColor: '#1d3b53' }}>
        <div className="rounded rounded-circle">
          <img
            src="/user/images/profile.png"
            height="150px"
            width="150px"
            className="rounded rounded-circle"
            alt="Profile"
          />
        </div>
        <div className="pt-1">
          <h1 className="text-white m-0">{profile.name} | {profile.status}</h1>
          <h6 className="text-white text-uppercase">{profile.department}</h6>
          <h6 className="text-white">{profile.email} | {profile.phone}</h6>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-4 px-3">
          <div className="col-md-3">
            <div className="card mb-2 bg-dark text-white">
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
                      Create Courses
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-decoration-none" href="#">
                      My Courses
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-decoration-none" href="#">
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-decoration-none" href="#">
                      Course Progress
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="home-content">
              <div className="overview-boxes">
                <div className="box">
                  <div className="right-side">
                    <div className="box-topic">Total Content</div>
                    <div className="number">402 Hours</div>
                    <div className="indicator">
                      <i className='bx bx-up-arrow-alt'></i>
                      <span className="text">Up from yesterday</span>
                    </div>
                  </div>
                  <i className='bx bx-cart-alt cart'></i>
                </div>
                <div className="box">
                  <div className="right-side">
                    <div className="box-topic">Total time Spent</div>
                    <div className="number">38 mins</div>
                    <div className="indicator">
                      <i className='bx bx-up-arrow-alt'></i>
                      <span className="text">Up from yesterday</span>
                    </div>
                  </div>
                  <i className='bx bxs-cart-add cart two'></i>
                </div>
                <div className="box">
                  <div className="right-side">
                    <div className="box-topic">Number Of Doubts resolved</div>
                    <div className="number">10</div>
                    <div className="indicator">
                      <i className='bx bx-up-arrow-alt'></i>
                      <span className="text">Up from yesterday</span>
                    </div>
                  </div>
                  <i className='bx bx-cart cart three'></i>
                </div>
                <div className="box">
                  <div className="right-side">
                    <div className="box-topic">Number of Doubts raised</div>
                    <div className="number">17</div>
                    <div className="indicator">
                      <i className='bx bx-down-arrow-alt down'></i>
                      <span className="text">Down From Today</span>
                    </div>
                  </div>
                  <i className='bx bxs-cart-download cart four'></i>
                </div>
              </div>

              <div className="sales-boxes">
                <div className="recent-sales box">
                  <div className="title">Recent Doubts Raised</div>
                  <div className="sales-details">
                    <ul className="details">
                      <li className="topic">Date</li>
                      <li><a href="#">22 Aug 2022</a></li>
                      <li><a href="#">22 Aug 2022</a></li>
                      <li><a href="#">22 Aug 2022</a></li>
                      <li><a href="#">22 Aug 20221</a></li>
                      <li><a href="#">22 Aug 2022</a></li>
                      <li><a href="#">22 Aug 2022</a></li>
                      <li><a href="#">22 Aug 2022</a></li>
                    </ul>
                    <ul className="details">
                      <li className="topic">Students</li>
                      <li><a href="#">Alex Doe</a></li>
                      <li><a href="#">David Mart</a></li>
                      <li><a href="#">Roe Parter</a></li>
                      <li><a href="#">Diana Penty</a></li>
                      <li><a href="#">Martin Paw</a></li>
                      <li><a href="#">Doe Alex</a></li>
                      <li><a href="#">Aiana Lexa</a></li>
                    </ul>
                    <ul className="details">
                      <li className="topic">Status</li>
                      <li><a href="#">Delivered</a></li>
                      <li><a href="#">Pending</a></li>
                      <li><a href="#">Pending</a></li>
                      <li><a href="#">Delivered</a></li>
                      <li><a href="#">Pending</a></li>
                      <li><a href="#">Delivered</a></li>
                      <li><a href="#">Delivered</a></li>
                    </ul>
                    <ul className="details">
                      <li className="topic">Wait Time</li>
                      <li><a href="#">204.98 mins</a></li>
                      <li><a href="#">24.55 mins</a></li>
                      <li><a href="#">25.88 mins</a></li>
                      <li><a href="#">170.66 mins</a></li>
                      <li><a href="#">56.56 mins</a></li>
                      <li><a href="#">44.95 mins</a></li>
                      <li><a href="#">67.33 mins</a></li>
                    </ul>
                  </div>
                  <div className="button">
                    <a href="#">See All</a>
                  </div>
                </div>
                <div className="top-sales box">
                  <div className="title">Most Interactive Students</div>
                  <ul className="top-sales-details">
                    <li>
                      <a href="#">
                        <span className="product">ABC</span>
                      </a>
                      <span className="price">1107 mins</span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="product">acd </span>
                      </a>
                      <span className="price">1567 mins</span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="product">dhg</span>
                      </a>
                      <span className="price">1234 mins</span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="product">Hermes</span>
                      </a>
                      <span className="price">2312 mins</span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="product">S</span>
                      </a>
                      <span className="price">1456 mins</span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="product">Guc</span>
                      </a>
                      <span className="price">2345 mins</span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="product">Add</span>
                      </a>
                      <span className="price">2345 mins</span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="product">Bilact</span>
                      </a>
                      <span className="price">1245 mins</span>
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

export default TeacherDashboard;









// const TeacherOverview = () => {
//   const [overviewData, setOverviewData] = useState({});

//   useEffect(() => {
//     fetch('https://your-backend-api.com/teacher/overview') //replace api url
//       .then((response) => response.json())
//       .then((data) => setOverviewData(data))
//       .catch((error) => console.error('Error fetching teacher overview data:', error));
//   }, []); 

//   return (
//     <div className="home-content">
//       <div className="overview-boxes">
//         <div className="box">
//           <div className="right-side">
//             <div className="box-topic">Total Content</div>
//             <div className="number">{overviewData.totalContent} Hours</div>
//             <div className="indicator">
//               <i className='bx bx-up-arrow-alt'></i>
//               <span className="text">Up from yesterday</span>
//             </div>
//           </div>
//           <i className='bx bx-cart-alt cart'></i>
//         </div>
//       </div>

//       <div className="sales-boxes">
//         <div className="recent-sales box">
//           <div className="title">Recent Doubts Raised</div>
//           <div className="sales-details">
//             <ul className="details">
//               <li className="topic">Date</li>
//               {overviewData.recentDoubts.map((doubt) => (
//                 <li key={doubt.id}><a href="#">{doubt.date}</a></li>
//               ))}
//             </ul>
//             <ul className="details">
//               <li className="topic">Students</li>
//               {overviewData.recentDoubts.map((doubt) => (
//                 <li key={doubt.id}><a href="#">{doubt.student}</a></li>
//               ))}
//             </ul>
//             <ul className="details">
//               <li className="topic">Status</li>
//               {overviewData.recentDoubts.map((doubt) => (
//                 <li key={doubt.id}><a href="#">{doubt.status}</a></li>
//               ))}
//             </ul>
//             <ul className="details">
//               <li className="topic">Wait Time</li>
//               {overviewData.recentDoubts.map((doubt) => (
//                 <li key={doubt.id}><a href="#">{doubt.waitTime}</a></li>
//               ))}
//             </ul>
//           </div>
//           <div className="button">
//             <a href="#">See All</a>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default TeacherOverview;
