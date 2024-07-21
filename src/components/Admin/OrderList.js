import React, { useEffect, useState } from 'react';
import axios from 'axios';


const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    setLoading(true);
    axios.get('http://localhost:8005/api/orders')
      .then(response => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching orders. Please try again later.');
        setLoading(false);
      });
  };

  const deleteOrder = (id) => {
    axios.delete(`http://localhost:8005/api/orders/${id}`)
      .then(() => {
        setOrders(orders.filter(order => order.id !== id));
      })
      .catch(() => {
        setError('Error deleting order. Please try again later.');
      });
  };

  return (
      <div className="bg-white">
          <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold mb-1 text-center">Orders</h1>
              <br></br>
              {loading && <p className="text-center">Loading...</p>}
              {error && <p className="text-red-500 text-center">{error}</p>}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {orders.map(order => (
                      <div key={order.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
                          <div className="p-4">
                              <h2 className="text-xl font-bold mb-2">{order.itemName}</h2>
                              <p className="text-gray-900 font-semibold mb-2">Quantity: {order.quantity}</p>
                              <p className="text-gray-900 font-semibold mb-2">Total Price: ₹{order.totalPrice.toFixed(2)}</p>
                              <p className="text-gray-900 mb-2">Name: {order.firstName} {order.lastName}</p>
                              <p className="text-gray-900 mb-2">Phone Number: {order.phoneNumber}</p>
                              <p className="text-gray-900 mb-2">Address: {order.address}, {order.pincode}</p>
                              <button
                                  onClick={() => deleteOrder(order.id)}
                                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
                              >
                                  Confirm Order
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

export default OrderList;
