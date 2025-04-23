import React from 'react';

const travels = [
  {
    name: 'Sathya Travels',
    image: 'sathya.jpg',
    rent: 'Rs33/km',
    ac: false,
    ceilingLights: true,
    djFloor: false,
    vocals: true,
    sideDj: true,
    seating: '20+1',
    location: 'Salem',
  },
  {
    name: 'Pooja Travels',
    image: 'pooja.jpg',
    rent: 'Rs35/km',
    ac: false,
    ceilingLights: true,
    djFloor: true,
    vocals: true,
    sideDj: true,
    seating: '20+1',
    location: 'Attur',
  }
];

const TravelCard = ({ travel }) => {
  return (
    <div className="border rounded-2xl shadow-md p-4 w-full max-w-sm m-4 bg-white">
      <a href={travel.image} target="_blank" rel="noopener noreferrer">
        <img src={travel.image} alt={travel.name} className="w-full rounded-lg mb-4" />
      </a>
      <h2 className="text-xl font-semibold text-center">{travel.name}</h2>
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

const PartyBusCatalog = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold font-sans">TripTactix</h1>
        <a href="vc.html" className="text-blue-600 underline block mt-2">Back</a>
      </header>
      <h1 className="text-center text-2xl font-semibold mb-6">Vehicle Catalog</h1>
      <div className="flex flex-wrap justify-center">
        {travels.map((travel, index) => (
          <TravelCard travel={travel} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PartyBusCatalog;
