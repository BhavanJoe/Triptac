import React from 'react';

const velavan = {
  name: 'Velavan Travels',
  image: 'velavan.jpg',
  rent: 'Rs30,000/day',
  ac: false,
  ceilingLights: true,
  djFloor: false,
  vocals: true,
  sideDj: true,
  seating: '30+1',
  location: 'Namakkal',
};

const TravelCard = ({ travel }) => {
  return (
    <div className="border rounded-2xl shadow-md p-6 w-full max-w-md mx-auto bg-white">
      <a href={travel.image} target="_blank" rel="noopener noreferrer">
        <img src={travel.image} alt={travel.name} className="w-full rounded-lg mb-4" />
      </a>
      <h2 className="text-xl font-bold text-center mb-2">{travel.name}</h2>
      <p><strong>Rent:</strong> {travel.rent}</p>
      <p><strong>AC:</strong> {travel.ac ? '✅' : '❌'}</p>
      <p><strong>Ceiling Lights:</strong> {travel.ceilingLights ? '✅' : '❌'}</p>
      <p><strong>DJ Floor:</strong> {travel.djFloor ? '✅' : '❌'}</p>
      <p><strong>Vocals:</strong> {travel.vocals ? '✅' : '❌'}</p>
      <p><strong>Side DJ:</strong> {travel.sideDj ? '✅' : '❌'}</p>
      <p><strong>Seating:</strong> {travel.seating}</p>
      <p><strong>Location:</strong> {travel.location}</p>
      <form className="mt-4">
        <label className="block">
          <strong>Pick-up date:</strong>
          <input type="date" className="block border mt-1 p-1 rounded w-full" />
        </label>
        <label className="block mt-4">
          <strong>Drop date:</strong>
          <input type="date" className="block border mt-1 p-1 rounded w-full" />
        </label>
        <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Check Availability 🚌
        </button>
      </form>
    </div>
  );
};

const VelavanTravels = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold font-sans">TripTactix</h1>
        <a href="vc.html" className="text-blue-600 underline block mt-2">Back</a>
      </header>
      <h1 className="text-center text-2xl font-semibold mb-6">Vehicle Catalog</h1>
      <TravelCard travel={velavan} />
    </div>
  );
};

export default VelavanTravels;
