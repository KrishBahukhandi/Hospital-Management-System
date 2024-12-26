import React from "react";
import "../../assets/CSS/DashboardHospital/_profileCard.css";
const ProfileCard = () => {
  return (
    <div className="card profile-card">
      <h3>Doctor Profile</h3>
      <p>Name: Dr. John Doe</p>
      <p>Specialization: General Medicine</p>
      <p>Experience: 10 years</p>
    </div>
  );
};

export default ProfileCard;
