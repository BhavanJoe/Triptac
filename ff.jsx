import React from 'react';

const vehicles = [
  {
    name: 'Karuppan Travels',
    image: 'bus1.jpeg',
    rent: 'Rs47,000/day',
    ac: false,
    ceilingLights: true,
    djFloor: false,
    vocals: true,
    sideDj: false,
    seating: '54+1',
    location: 'Salem'
  },
  {
    name: 'Mathi Rudran',
    image: 'rudran.jpg',
    rent: 'Rs50,000/day',
    ac: true,
    ceilingLights: true,
    djFloor: true,
    vocals: true,
    sideDj: true,
    seating: '54+1',
    location: 'Namakkal'
  },
  {
    name: 'Mathi Wolverine',
    image: 'wolverine.jpg',
    rent: 'Rs53,000/day',
    ac: true,
    ceilingLights: true,
    djFloor: true,
    vocals: true,
    sideDj: true,
    seating: '54+1',
    location: 'Namakkal'
  }
];

const VehicleCard = ({ vehicle }) => (
  <div className="border rounded-xl p-4 shadow-md bg-white w-full max-w-md mx-auto mb-6">
    <a href={vehicle.image} target="_blank" rel="noopener noreferrer">
      <img src={vehicle.image} alt={vehicle.name} className="rounded w-full mb-4" />
    </a>
    <h2 className="text-xl font-semibold text-center mb-2">{vehicle.name}</h2>
    <p><strong>Rent:</strong> {vehicle.rent}</p>
    <p><strong>AC:</strong> {vehicle.ac ? '✅' : '❌'}</p>
    <p><strong>Ceiling Lights:</strong> {vehicle.ceilingLights ? '✅' : '❌'}</p>
    <p><strong>DJ Floor:</strong> {vehicle.djFloor ? '✅' : '❌'}</p>
    <p><strong>Vocals:</strong> {vehicle.vocals ? '✅' : '❌'}</p>
    <p><strong>Side DJ:</strong> {vehicle.sideDj ? '✅' : '❌'}</p>
    <p><strong>Seating:</strong> {vehicle.seating}</p>
    <p><strong>Location:</strong> {vehicle.location}</p>
    <div className="mt-4">
      <label className="block mb-2">
        <strong>Pick-up date:</strong>
        <input type="date" className="w-full border rounded p-1 mt-1" />
      </label>
      <label className="block mb-2">
        <strong>Drop date:</strong>
        <input type="date" className="w-full border rounded p-1 mt-1" />
      </label>
      <button className="w-full bg-blue-600 text-white py-2 mt-2 rounded hover:bg-blue-700">
        Check Availability 🚌
      </button>
    </div>
  </div>
);

const KaruppanTravelsCatalog = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold font-sans">TripTactix</h1>
        <a href="vc.html" className="text-blue-600 underline block mt-2">Back</a>
      </header>
      <h2 className="text-center text-2xl font-semibold mb-6">Vehicle Catalog</h2>
      <div className="grid grid-cols-1 gap-6">
        {vehicles.map((vehicle, index) => (
          <VehicleCard key={index} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default KaruppanTravelsCatalog;
