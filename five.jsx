import React from 'react';

const vehicles = [
  {
    name: 'Swift Dzire',
    image: 'dzire.jpg',
    rent: 'Rs10/km',
    ac: true,
    seating: '4+1',
    location: 'Salem'
  },
  {
    name: 'Hyundai Aura',
    image: 'aura.jpg',
    rent: 'Rs11/km',
    ac: true,
    seating: '4+1',
    location: 'Salem'
  }
];

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="border rounded-2xl shadow-md p-4 w-full max-w-sm m-4 bg-white">
      <img src={vehicle.image} alt={vehicle.name} className="w-full rounded-lg mb-4" />
      <h2 className="text-xl font-semibold text-center">{vehicle.name}</h2>
      <p><strong>Rent:</strong> {vehicle.rent}</p>
      <p><strong>AC:</strong> {vehicle.ac ? '✅' : '❌'}</p>
      <p><strong>Seating:</strong> {vehicle.seating}</p>
      <p><strong>Location:</strong> {vehicle.location}</p>
      <form className="mt-4">
        <label className="block">
          <strong>Pick-up date:</strong>
          <input type="date" className="block border mt-1 p-1 rounded w-full" />
        </label>
        <label className="block mt-4">
          <strong>Drop date:</strong>
          <input type="date" className="block border mt-1 p-1 rounded w-full" />
        </label>
        <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Check Availability 🚗
        </button>
      </form>
    </div>
  );
};

const VehicleCatalog = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold font-sans">TripTactix</h1>
        <a href="vc.html" className="text-blue-600 underline block mt-2">Back</a>
      </header>
      <h1 className="text-center text-2xl font-semibold mb-6">Vehicle Catalog</h1>
      <div className="flex flex-wrap justify-center">
        {vehicles.map((vehicle, index) => (
          <VehicleCard vehicle={vehicle} key={index} />
        ))}
      </div>
    </div>
  );
};

export default VehicleCatalog;
