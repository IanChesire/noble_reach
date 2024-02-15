// App.js
import React, { useState } from 'react';
import VolunteerForm from './VolunteerForm';
import ScamReportForm from './ScamReportForm';

const App = () => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showScamReportForm, setShowScamReportForm] = useState(false);

  const handleVolunteerClick = () => {
    setShowVolunteerForm(true);
  };

  const handleScamReportClick = () => {
    setShowScamReportForm(true);
  };

  const handleCloseForm = () => {
    setShowVolunteerForm(false);
    setShowScamReportForm(false);
  };

  const handleVolunteerFormSubmit = (formData) => {
    // Handle volunteer form submission (e.g., send data to the server)
    console.log('Volunteer form submitted:', formData);
    // Close the form
    setShowVolunteerForm(false);
  };

  const handleScamReportFormSubmit = (formData) => {
    // Handle scam report form submission (e.g., send data to the server)
    console.log('Scam report submitted:', formData);
    // Close the form
    setShowScamReportForm(false);
  };

  return (
    <div>
      <h1>Your Application</h1>
      
      <button onClick={handleVolunteerClick}>Volunteer</button>
      <button onClick={handleScamReportClick}>Report Scam</button>

      {showVolunteerForm && (
        <VolunteerForm onClose={handleCloseForm} onSubmit={handleVolunteerFormSubmit} />
      )}

      {showScamReportForm && (
        <ScamReportForm onClose={handleCloseForm} onSubmit={handleScamReportFormSubmit} />
      )}
    </div>
  );
};

export default App;
