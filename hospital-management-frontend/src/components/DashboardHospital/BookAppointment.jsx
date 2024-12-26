import React, { useState } from "react";
import "../../assets/CSS/DashboardHospital/_bookAppointment.css";
const BookAppointment = () => {
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Booked!");
    setFormData({ doctor: "", date: "", time: "" });
  };

  return (
    <section className="book-appointment">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Doctor:
          <input
            type="text"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Book Appointment</button>
      </form>
    </section>
  );
};

export default BookAppointment;
