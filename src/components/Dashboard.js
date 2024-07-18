import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const isDashboardPage = location.pathname === '/dashboard';

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><Link to="/dashboard/tutorials">Tutorials</Link></li>
          <li><Link to="/dashboard/playground">Playground</Link></li>
          <li><Link to="/dashboard/community">Community</Link></li>
        </ul>
      </div>
      <div className="main-content">
        {isDashboardPage && (
          <div className="dashboard-content">
            <section className="welcome-section">
              <h1>Welcome to the p5.js Dashboard!</h1>
              <p>Get started with our tutorials, explore the playground, and join the community.</p>
            </section>
            <section className="recent-projects-section">
              <h2>Recent Projects</h2>
              {/* Display recent projects here */}
            </section>
            <section className="featured-tutorials-section">
              <h2>Featured Tutorials</h2>
              {/* Display featured tutorials here */}
            </section>
            <section className="community-highlights-section">
              <h2>Community Highlights</h2>
              {/* Display community highlights here */}
            </section>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
