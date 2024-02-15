// ScamReportForm.js
import React, { useState } from 'react';

const ScamReportForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    websiteURL: '',
    description: '',
    evidence: '',
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
      <h2>Scam Report Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Website URL:
          <input
            type="url"
            name="websiteURL"
            value={formData.websiteURL}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Description of the Scam:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <br />
        <label>
          Evidence or Observations:
          <textarea
            name="evidence"
            value={formData.evidence}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <button type="submit">Submit Report</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default ScamReportForm;
