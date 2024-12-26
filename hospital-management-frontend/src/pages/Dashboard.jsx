import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <style>
        {`
        /* General Reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Arial", sans-serif;
          display: flex;
          min-height: 100vh;
        }

        /* Dashboard Layout */
        .dashboard {
          display: flex;
          width: 100%;
        }

        /* Sidebar */
        .sidebar {
          width: 250px;
          background-color: #2c7be5; /* Hospital Blue */
          color: white;
          min-height: 100vh;
          padding: 20px;
        }

        .sidebar h2 {
          font-size: 1.5em;
          margin-bottom: 30px;
          text-align: center;
        }

        .sidebar ul {
          list-style: none;
        }

        .sidebar ul li {
          margin: 15px 0;
        }

        .sidebar ul li a {
          color: white;
          text-decoration: none;
          font-size: 1em;
          display: block;
          padding: 10px;
          border-radius: 5px;
        }

        .sidebar ul li a:hover {
          background-color: #1a5fb4;
        }

        /* Main Content */
        .main-content {
          flex: 1;
          background: #f5f7fa;
          padding: 20px;
          overflow-y: auto;
        }

        header h1 {
          font-size: 2em;
          margin-bottom: 20px;
          color: #333;
        }

        /* Cards Section */
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .card h3 {
          font-size: 1.2em;
          color: #555;
          margin-bottom: 10px;
        }

        .card p {
          font-size: 1.5em;
          color: #2c7be5;
          font-weight: bold;
        }

        /* Recent Activity Section */
        .recent-activity {
          margin-top: 20px;
        }

        .recent-activity h2 {
          font-size: 1.5em;
          margin-bottom: 10px;
        }

        .recent-activity ul {
          list-style: none;
        }

        .recent-activity li {
          background: white;
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          font-size: 0.9em;
        }
        `}
      </style>

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>HospiConnect</h2>
        <ul>
          <li>
            <a href="#">🏠 Dashboard</a>
          </li>
          <li>
            <a href="#">🧑‍⚕️ Doctors</a>
          </li>
          <li>
            <a href="#">🛌 Patients</a>
          </li>
          <li>
            <a href="#">📅 Appointments</a>
          </li>
          <li>
            <a href="#">💊 Pharmacy</a>
          </li>
          <li>
            <a href="#">⚙️ Settings</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header>
          <h1>Hospital Dashboard</h1>
        </header>

        {/* Cards Section */}
        <section className="cards">
          <div className="card">
            <h3>Total Patients</h3>
            <p>150</p>
          </div>
          <div className="card">
            <h3>Total Doctors</h3>
            <p>25</p>
          </div>
          <div className="card">
            <h3>Appointments Today</h3>
            <p>35</p>
          </div>
          <div className="card">
            <h3>Available Beds</h3>
            <p>45</p>
          </div>
        </section>

        {/* Recent Activities Section */}
        <section className="recent-activity">
          <h2>Recent Activities</h2>
          <ul>
            <li>✅ Appointment with Dr. Smith at 10:00 AM</li>
            <li>✅ Patient John Doe admitted to Ward 5</li>
            <li>✅ Medication issued to Patient Mary Jane</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;