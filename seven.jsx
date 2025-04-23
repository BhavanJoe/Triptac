import React from 'react';

const vehicles = [
  {
    name: 'Suzuki Omni',
    image: 'omni.jpg',
    rent: 'Rs7/km',
    ac: false,
    seating: '7+1',
    location: 'Rasipuram',
  },
  {
    name: 'Suzuki EECO',
    image: 'eeco.jpg',
    rent: 'Rs8/km',
    ac: true,
    seating: '6+1',
    location: 'Attur',
  },
  {
    name: 'Suzuki Ertiga',
    image: 'ertiga4.jpg',
    rent: 'Rs10/km',
    ac: true,
    seating: '6+1',
    location: 'Namakkal',
  },
];

const VehicleCard = ({ vehicle }) => (
  <div className="vehicle-card">
    <img src={vehicle.image} alt={vehicle.name} />
    <h2>{vehicle.name}</h2>
    <p><b>Rent:</b> {vehicle.rent}</p>
    <p><b>AC:</b> {vehicle.ac ? '✅' : '❌'}</p>
    <p><b>Seating:</b> {vehicle.seating}</p>
    <p><b>Location:</b> {vehicle.location}</p>

    <form>
      <p><b>Check Availability:</b></p>
      <label>
        Pick-up date: <input type="date" name="pickup" />
      </label><br /><br />
      <label>
        Drop date: <input type="date" name="drop" />
      </label><br /><br />
      <button type="submit">Check Availability 🚗</button>
    </form>
  </div>
);

const VehicleCatalog = () => (
  <div>
    <header>
      <h1 className="site-title">TripTactix</h1>
    </header>

    <a href="vc.html"><b>Back</b></a>
    <h1 className="catalog-title">Vehicle Catalog</h1>

    <div className="vehicle-container">
      {vehicles.map((vehicle, index) => (
        <VehicleCard key={index} vehicle={vehicle} />
      ))}
    </div>
  </div>
);

export default VehicleCatalog;
