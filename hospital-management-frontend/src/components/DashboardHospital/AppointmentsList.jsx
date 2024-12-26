import React from "react";
import "../../assets/CSS/DashboardHospital/_appointments.css";
const AppointmentsList = () => {
  const appointments = [
    { id: 1, doctor: "Dr. Smith", time: "10:00 AM", status: "Upcoming" },
    { id: 2, doctor: "Dr. Johnson", time: "11:30 AM", status: "Past" },
    { id: 3, doctor: "Dr. Lee", time: "02:00 PM", status: "Upcoming" }
  ];

  return (
    <section className="appointments-list">
      <h2>Upcoming Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <span>{appointment.doctor}</span> at {appointment.time} - {appointment.status}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AppointmentsList;
