import React, { useState } from 'react';

function VolunteerForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        activity: '',
        day: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const volunteerData = { ...formData };

        // Store data in db.json using json-server
        fetch('src/Components/Volunteers.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Form submitted successfully!');
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                location: '',
                activity: '',
                day: '',
                message: ''
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred, please try again.');
        });
    };

    return (
        <div>
            <h2>Volunteer Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

                <label htmlFor="phone">Phone Number:</label><br />
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required /><br /><br />

                <label htmlFor="location">Location:</label><br />
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required /><br /><br />

                <label htmlFor="activity">Activity to Participate In:</label><br />
                <input type="text" id="activity" name="activity" value={formData.activity} onChange={handleChange} required /><br /><br />

                <label htmlFor="day">Available Day:</label><br />
                <input type="text" id="day" name="day" value={formData.day} onChange={handleChange} required /><br /><br />

                <label htmlFor="message">Message of Hope:</label><br />
                <textarea id="message" name="message" rows="4" cols="50" value={formData.message} onChange={handleChange}></textarea><br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default VolunteerForm;

