import React, { useState } from 'react';


const recyclableItems = [
  { material: 'Plastic', type: 'PET Bottles', price: '₹20-₹30 per kg' },
  { material: 'Plastic', type: 'HDPE', price: '₹40-₹60 per kg' },
  { material: 'Plastic', type: 'LDPE', price: '₹30-₹40 per kg' },
  { material: 'Plastic', type: 'Mixed Plastic', price: '₹15-₹25 per kg' },
  { material: 'Paper', type: 'Newspaper', price: '₹10-₹15 per kg' },
  { material: 'Paper', type: 'Cardboard', price: '₹8-₹12 per kg' },
  { material: 'Paper', type: 'Mixed Paper', price: '₹5-₹8 per kg' },
  { material: 'Metal', type: 'Aluminum', price: '₹100-₹120 per kg' },
  { material: 'Metal', type: 'Steel', price: '₹20-₹30 per kg' },
  { material: 'Metal', type: 'Iron', price: '₹18-₹25 per kg' },
  { material: 'Glass', type: 'Clear Glass', price: '₹1-₹2 per kg' },
  { material: 'Glass', type: 'Mixed Glass', price: '₹0.50-₹1 per kg' },
  { material: 'Electronic Waste', type: 'Circuit Boards', price: '₹250-₹300 per kg' },
  { material: 'Electronic Waste', type: 'Batteries', price: '₹80-₹100 per kg' },
];

function App() {
  const [selectedMaterial, setSelectedMaterial] = useState('All');

  const handleMaterialChange = (event) => {
    setSelectedMaterial(event.target.value);
  };

  const filteredItems = selectedMaterial === 'All' ? recyclableItems : recyclableItems.filter(item => item.material === selectedMaterial);

  return (
    <div className="App p-8">
      <header className="App-header mb-8">
        <h1 className="text-2xl font-bold mb-4">Recyclable Material Prices in India</h1>
        <label htmlFor="material-select" className="block mb-2">Filter by material: </label>
        <select
          id="material-select"
          value={selectedMaterial}
          onChange={handleMaterialChange}
          className="mb-4 p-2 border rounded"
        >
          <option value="All">All</option>
          <option value="Plastic">Plastic</option>
          <option value="Paper">Paper</option>
          <option value="Metal">Metal</option>
          <option value="Glass">Glass</option>
          <option value="Electronic Waste">Electronic Waste</option>
        </select>
      </header>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Material</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{item.material}</td>
              <td className="py-2 px-4 border-b">{item.type}</td>
              <td className="py-2 px-4 border-b">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
