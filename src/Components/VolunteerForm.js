// VolunteerForm.js
import React, { useState } from 'react';

const VolunteerForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    availability: '',
    skills: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform client-side validation if needed

    // Pass the data to the parent component
    onSubmit(formData);
  };

  return (
    <div>
      <h2>Volunteer Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Availability:
          <input type="text" name="availability" value={formData.availability} onChange={handleChange} />
        </label>
        <br />
        <label>
          Skills/Preferences:
          <textarea name="skills" value={formData.skills} onChange={handleChange}></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;
