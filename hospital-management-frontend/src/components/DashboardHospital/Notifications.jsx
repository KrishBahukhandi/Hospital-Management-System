import React from "react";
import "../../assets/CSS/DashboardHospital/_notifications.css";
const Notifications = () => {
  const notifications = [
    "Reminder: Doctor Smith will be on leave tomorrow.",
    "Urgent: Patient John Doe needs medication at 2:00 PM.",
    "Reminder: Pharmacy closes at 6:00 PM today."
  ];

  return (
    <section className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>✅ {notification}</li>
        ))}
      </ul>
    </section>
  );
};

export default Notifications;
