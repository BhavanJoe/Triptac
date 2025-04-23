import React from 'react';
import './TTS.css';

const TripForm = () => {
  return (
    <div
      style={{
        backgroundImage: "url('bg.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <header>
        <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
          TripTactix
        </h1>
      </header>

      <a href="Homepage.html"><strong>Back</strong></a>

      <h1 style={{ textAlign: 'center' }}>Select Your Trip Type</h1>

      <form className="select">
        <label>
          <strong>Name:</strong>
          <input type="text" placeholder="Enter your Name" />
        </label><br /><br />

        <label>
          <strong>Phone:</strong>
          <input type="tel" placeholder="Enter your Phone no" />
        </label><br /><br />

        <label>
          <strong>No of Days:</strong>
          <input type="number" placeholder="Enter no of days of trip" />
        </label><br /><br />

        <label>
          <strong>Trip Type:</strong>
          <select>
            <option>Select your Trip Type</option>
            <option>College IV</option>
            <option>School Trip</option>
            <option>Business Trip</option>
            <option>Family Vacation</option>
            <option>Family Function</option>
            <option>Friends Gang Trip</option>
            <option>Devotional Trip</option>
          </select>
        </label><br /><br />

        <label>
          <strong>Pick-up Date:</strong>
          <input type="date" />
        </label><br /><br />

        <label>
          <strong>Drop Date:</strong>
          <input type="date" />
        </label><br /><br />

        <label>
          <strong>Pick-up Point:</strong>
          <input type="text" placeholder="Enter Pick-up Point" />
        </label><br /><br />

        <label>
          <strong>Strength:</strong>
          <input type="number" placeholder="Enter no of person" />
        </label><br /><br />

        <label>
          <strong>Vehicle Capacity:</strong>
          <select>
            <option>select seating Capacity</option>
            <option>5 seater</option>
            <option>7 seater</option>
            <option>10 seater</option>
            <option>12 seater</option>
            <option>20 seater</option>
            <option>30 seater</option>
            <option>40 seater</option>
            <option>54 seater</option>
          </select>
        </label><br /><br /><br />

        <a href="vc.html">
          <button type="button">Select my trip 🚌</button>
        </a>
      </form>
    </div>
  );
};

export default TripForm;
