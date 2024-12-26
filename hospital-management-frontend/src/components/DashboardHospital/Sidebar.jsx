import React from "react";
import "../../assets/CSS/DashboardHospital/_sidebar.css";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>HospiConnect</h2>
      <ul>
        <li><a href="#">🏠 Dashboard</a></li>
        <li><a href="#">🧑‍⚕️ Doctors</a></li>
        <li><a href="#">🛌 Patients</a></li>
        <li><a href="#">📅 Appointments</a></li>
        <li><a href="#">💊 Pharmacy</a></li>
        <li><a href="#">⚙️ Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
