import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from "../Nav";

const ItemCard = ({ item, onDelete }) => {
  const handleDelete = () => onDelete(item.id);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {item.photoUrl && (
        <img
          src={`http://localhost:8005/api/items/photos/${item.photoUrl}`} // Using template literal for image source
          alt={item.title}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        <p className="text-gray-700 mb-2">{item.description}</p>
        <p className="text-gray-900 font-semibold mb-2">Category: {item.category}</p>
        <p className="text-gray-900 font-semibold mb-2">Condition: {item.condition}</p>
        <p className="text-gray-900 font-semibold mb-2">Location: {item.location}</p>
        <p className="text-gray-900 font-semibold mb-2">Contact No: {item.contactNumber}</p>
        <p className="text-gray-900 font-bold text-lg">Cost: ₹{item.price.toFixed(2)}</p>
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2">Delete</button>
      </div>
    </div>
  );
};

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8005/api/items');
      setItems(response.data);
    } catch (error) {
      console.error('There was an error fetching the items!', error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8005/api/items/${itemId}`);
      fetchItems();
    } catch (error) {
      console.error('There was an error deleting the item!', error);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Marketplace</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(item => (
            <ItemCard key={item.id} item={item} onDelete={handleDeleteItem} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
