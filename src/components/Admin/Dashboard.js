import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = () => {
    setLoading(true);
    axios.get('http://localhost:8005/api/dashboard')
      .then(response => {
        setDashboardData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching dashboard data. Please try again later.');
        setLoading(false);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!dashboardData) {
    return null; 
  }

  const { totalWasteOrdered, wasteCategoryData } = dashboardData;

  return (
    <><div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Total Waste Ordered: {totalWasteOrdered} kg</h2>

              <h2 className="text-xl font-bold mb-4">Waste Category Data:</h2>
              <div className="grid grid-cols-2 gap-4">
                  {Object.keys(wasteCategoryData).map(category => (
                      <div key={category} className="bg-gray-100 p-4 rounded-lg shadow">
                          <h3 className="text-lg font-semibold mb-2">{category}</h3>
                          <p className="text-gray-700">Quantity: {wasteCategoryData[category]} kg</p>
                      </div>
                  ))}
              </div>
          </div>
      </div></>
  );
};

export default Dashboard;
