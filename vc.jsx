import React from 'react';
import './vc.css';

const VehicleCatalog = () => {
  return (
    <div>
      <header>
        <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>TripTactix</h1>
      </header>

      <a href="TTS.html"><strong>Back</strong></a>

      <h1 style={{ textAlign: 'center' }}>Vehicle Catalog</h1>
      <br />

      <div className="vehicle-container">
        <div className="five">
          <a href="five.html"><img src="5.jpeg" alt="5 Seater" /></a>
          <h2 style={{ textAlign: 'center' }}>5 Seater</h2>
          <a href="five.html"><button>View Catalog</button></a>
        </div>

        <div className="seven">
          <a href="seven.html"><img src="7.jpeg" alt="7 Seater" /></a>
          <h2 style={{ textAlign: 'center' }}>7 Seater</h2>
          <a href="seven.html"><button>View Catalog</button></a>
        </div>

        <div className="twelve">
          <a href="twelve.html"><img src="12.jpeg" alt="12 Seater" /></a>
          <h2 style={{ textAlign: 'center' }}>12 Seater</h2>
          <a href="twelve.html"><button>View Catalog</button></a>
        </div>

        <div className="twenty">
          <a href="twenty.html"><img src="20.jpeg" alt="20 Seater" /></a>
          <h2 style={{ textAlign: 'center' }}>20 Seater</h2>
          <a href="twenty.html"><button>View Catalog</button></a>
        </div>

        <div className="thirty">
          <a href="thirty.html"><img src="30.jpeg" alt="30 Seater" /></a>
          <h2 style={{ textAlign: 'center' }}>30 Seater</h2>
          <a href="thirty.html"><button>View Catalog</button></a>
        </div>

        <div className="ff">
          <a href="ff.html"><img src="54.jpeg" alt="54 Seater" /></a>
          <h2 style={{ textAlign: 'center' }}>54 Seater</h2>
          <a href="ff.html"><button>View Catalog</button></a>
        </div>
      </div>
    </div>
  );
};

export default VehicleCatalog;
