import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';

const Analytics = ({ username }) => {
  useEffect(() => {
    const ctxDoughnut = document.getElementById('doughnut').getContext('2d');
    const ctxPolarArea = document.getElementById('polarArea').getContext('2d');
    const ctxPie = document.getElementById('pie').getContext('2d');
    const ctxBar = document.getElementById('bar').getContext('2d');

    // Destroy existing charts if they exist
    Chart.getChart('doughnut')?.destroy();
    Chart.getChart('polarArea')?.destroy();
    Chart.getChart('pie')?.destroy();
    Chart.getChart('bar')?.destroy();

    new Chart(ctxDoughnut, {
      type: 'doughnut',
      data: {
        labels: [
          'IFM',
          'DSA',
          'Advance Propulsion',
          'Computer',
          'Offshore structure',
          'English',
        ],
        datasets: [
          {
            label: 'Total Hours',
            data: [25, 30, 15, 13, 21, 41],
            borderWidth: 1,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
          },
        ],
      },
    });

    new Chart(ctxPolarArea, {
      type: 'polarArea',
      data: {
        labels: [
          'IFM',
          'DSA',
          'Advance Propulsion',
          'Computer',
          'Offshore structure',
          'English',
        ],
        datasets: [
          {
            label: 'Total Students Enrolled',
            data: [25, 30, 15, 13, 21, 41],
            borderWidth: 1,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });

    new Chart(ctxPie, {
      type: 'pie',
      data: {
        labels: [
          'IFM',
          'DSA',
          'Advance Propulsion',
          'Computer',
          'Offshore structure',
          'English',
        ],
        datasets: [
          {
            label: 'Total Assignments submission',
            data: [25, 30, 15, 13, 21, 41],
            borderWidth: 1,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });

    new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: [
          'IFM',
          'DSA',
          'Advance Propulsion',
          'Computer',
          'Offshore structure',
          'English',
        ],
        datasets: [
          {
            label: 'Total Engagements',
            data: [25, 30, 15, 13, 21, 41],
            borderWidth: 1,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });

    // Cleanup
    return () => {
      // Clean up any resources (if necessary)
    };
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div>
      <h2 className="fw-bold text-center text-danger fs-1 my-3 border-bottom border-1 pb-3">
        {username} Analytics
      </h2>
      <div className="d-flex justify-content-around py-3 flex-wrap gap-5 border-bottom border-1">
        <div className="rounded rounded-end py-2 px-5 fs-3 fw-bold text-primary" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
          Total Engagement
          <br />
          <h6 className="fs-3 text-center text-primary">50.90</h6>
        </div>
        <div className="rounded rounded-end py-2 px-5 fs-3 fw-bold text-primary" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
          Total Views 👀
          <br />
          <h6 className="fs-3 text-center text-primary">55</h6>
        </div>
        <div className="rounded rounded-end py-2 px-5 fs-3 fw-bold text-primary" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
          Total unique Views 👁️
          <br />
          <h6 className="fs-3 text-center text-primary">28</h6>
        </div>
        <div className="rounded rounded-end py-2 px-5 fs-3 fw-bold text-primary" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
          Total Courses
          <br />
          <h6 className="fs-3 text-center text-primary">6</h6>
        </div>
        <div className="rounded rounded-end py-2 px-5 fs-3 fw-bold text-primary" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
          Total Assignments
          <br />
          <h6 className="fs-3 text-center text-primary">30</h6>
        </div>
      </div>
      <div className="px-3 py-2">
        <div className="d-flex justify-content-evenly flex-wrap gap-5">
          <div className="w-25">
            <p className="fw-bold text-danger text-center fs-4">Lecture hours courses</p>
            <canvas id="doughnut"></canvas>
          </div>
          <div className="w-25">
            <p className="fw-bold text-danger text-center fs-4">Students Enrolled in courses</p>
            <canvas id="polarArea"></canvas>
          </div>
          <div className="w-25">
            <p className="fw-bold text-danger text-center fs-4">Total Assignments submission</p>
            <canvas id="pie"></canvas>
          </div>
          <div className="w-75">
            <p className="fw-bold text-danger text-center fs-4">Students Engagement</p>
            <canvas id="bar"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
