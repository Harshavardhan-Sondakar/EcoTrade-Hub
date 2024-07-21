import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ItemCard = ({ item, onBuyNow }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 m-4 w-full max-w-xs">
      {item.photoUrl && (
        <img
          src={`http://localhost:8005/api/items/photos/${item.photoUrl}`}
          alt={item.title}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <p className="text-gray-800 font-medium mb-2">Category: {item.category}</p>
        <p className="text-gray-800 font-medium mb-2">Quantity(kg): {item.quantity}</p>
        <p className="text-gray-800 font-medium mb-2">Location: {item.location}</p>
        <p className="text-gray-800 font-medium mb-2">Contact No: {item.contactNumber}</p>
        <p className="text-gray-800 font-medium mb-2">Email: {item.email}</p>
        <p className="text-gray-800 font-bold text-lg">Cost: ₹{item.price.toFixed(2)}  /kg</p>
        <div className="mt-4 flex space-x-4">
          <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600" onClick={() => onBuyNow(item)}>Buy Now</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={() => window.open(`https://wa.me/${item.contactNumber}`, '_blank')}>Contact Seller</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showBuyForm, setShowBuyForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    setLoading(true);
    axios.get('http://localhost:8005/api/items')
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching items. Please try again later.');
        setLoading(false);
      });
  };

  const handleBuyNow = (item) => {
    setSelectedItem(item);
    setShowBuyForm(true);
  };

  const handleFormClose = () => {
    setShowBuyForm(false);
    setSelectedItem(null);
  };

  const handleBuySubmit = (formData) => {
    axios.post('http://localhost:8005/api/orders', {
      ...formData,
      itemId: selectedItem.id,
      itemName: selectedItem.title,
      itemPrice: selectedItem.price
    })
    .then(response => {
      alert('Order placed successfully!');
      handleFormClose();
    })
    .catch(error => {
      alert('Error placing order. Please try again.');
      console.error(error);
    });
  };

  return (
      <div className="bg-white">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-1 text-center">Marketplace</h1>
          <br></br>
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(item => (
              <ItemCard key={item.id} item={item} onBuyNow={handleBuyNow} />
            ))}
          </div>
          {showBuyForm && selectedItem && (
            <BuyForm item={selectedItem} onSubmit={handleBuySubmit} onClose={handleFormClose} />
          )}
        </div>
      </div>
  );
};

const BuyForm = ({ item, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    pincode: '',
    quantity: 1,
    totalPrice: (item.price).toFixed(2)
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newFormData = { ...formData, [name]: value };

    if (name === 'quantity') {
      const quantity = parseInt(value, 10);
      const totalPrice = (quantity * item.price).toFixed(2);
      newFormData = { ...newFormData, totalPrice };
    }

    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-85 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-3 text-center">Buy Item</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-3">
            <span className="text-gray-700">First Name:</span>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none py-1 px-2" />
          </label>
          <label className="block mb-3">
            <span className="text-gray-700">Last Name:</span>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none py-1 px-2" />
          </label>
          <label className="block mb-3">
            <span className="text-gray-700">Phone Number:</span>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none py-1 px-2" />
          </label>
          <label className="block mb-3">
            <span className="text-gray-700">Address:</span>
            <textarea name="address" value={formData.address} onChange={handleInputChange} required className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none py-1 px-2" />
          </label>
          <label className="block mb-3">
            <span className="text-gray-700">Pincode:</span>
            <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} required className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none py-1 px-2" />
          </label>
          <label className="block mb-3">
            <span className="text-gray-700">Quantity(kg):</span>
            <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} min="1" required className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none py-1 px-2" />
          </label>
          <p className="text-gray-900 font-bold mb-4">Total Cost: ₹{formData.totalPrice}</p>
          <div className="flex justify-between">
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Buy Now</button>
            <button type="button" className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default App;
