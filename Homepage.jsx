import React from 'react';
import './Homepage.css';

const TripTactixHome = () => {
  return (
    <div
      style={{
        backgroundImage: "url('bg3.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: '#333',
      }}
    >
      <header>
        <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
          TripTactix
        </h1>
      </header>

      <div className="logo">
        <img src="image-removebg-preview.png" alt="TripTactix Logo" />
      </div>

      <main className="Home">
        <p>
          <strong>Welcome to TripTactix!</strong><br />
          Your gateway to unforgettable adventures. 🌍✨
        </p>

        <p>
          <strong>Discover, Plan, Explore</strong><br />
          Whether you're craving tranquil beaches, bustling cities, or thrilling
          adventures, TripTactix is here to make your travel dreams come true.
        </p>

        <p>
          <strong>Why Choose Us?</strong><br />
          – Expert Planning: Let us simplify your journey with personalized
          itineraries tailored to your interests.<br />
          – Hidden Gems: Explore offbeat destinations and discover authentic
          local experiences.<br />
          – Seamless Experience: From bookings to recommendations, we've got you
          covered.
        </p>

        <p>
          <strong>Make Memories That Last</strong><br />
          Your next adventure is just a click away. Dive into the possibilities
          with TripTactix—where every journey tells a story.
        </p>

        <p>
          <strong>Ready to start?</strong>
        </p>

        <a href="TTS.html">
          <img
            src="image-removebg-preview.png"
            alt="Start Your Journey"
            style={{ maxWidth: '150px' }}
          />
        </a>
        <br />
        <a href="TTS.html">
          <button>Here you go! 🚌</button>
        </a>
      </main>
    </div>
  );
};

export default TripTactixHome;
