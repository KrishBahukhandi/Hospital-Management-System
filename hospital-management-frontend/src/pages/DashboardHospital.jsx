import React from "react";
import Sidebar from "../components/DashboardHospital/Sidebar";
import ProfileCard from "../components/DashboardHospital/ProfileCard";
import AppointmentsList from "../components/DashboardHospital/AppointmentsList";
import BookAppointment from "../components/DashboardHospital/BookAppointment";
import Notifications from "../components/DashboardHospital/Notifications";
// import "../assets/CSS/DashboardHospital/_base.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* <Navbar /> */}
      <div className="dashboard-body">
        <Sidebar />
        <main className="main-content">
          <ProfileCard />
          <AppointmentsList />
          <BookAppointment />
          <Notifications />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
