import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const AddItem = () => {
    const [item, setItem] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        location: '',
        contactNumber: '',
        quantity: '',
        email: ''
    });

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('item', new Blob([JSON.stringify(item)], {
            type: "application/json"
        }));
        formData.append('file', file);

        axios.post('http://localhost:8005/api/items', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            toast.success('Item added successfully!');
            setItem({
                title: '',
                description: '',
                category: '',
                price: '',
                location: '',
                contactNumber: '',
                quantity: '',
                email: ''
            });
            setFile(null);
        })
        .catch(error => {
            toast.error('Error adding item!');
            console.error('Error adding item:', error);
        });
    };

    return (
        <>
            <div className="max-w-4xl mx-auto p-8">
                <h2 className="text-3xl font-bold mb-8">Add Item</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Title:</label>
                            <input
                                type="text"
                                name="title"
                                value={item.title}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description:</label>
                            <input
                                type="text"
                                name="description"
                                value={item.description}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category:</label>
                            <input
                                type="text"
                                name="category"
                                value={item.category}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price:</label>
                            <input
                                type="number"
                                name="price"
                                value={item.price}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                <div>
                                <Link to='/price'><button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Check for Price</button></Link>
                                </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Location:</label>
                            <input
                                type="text"
                                name="location"
                                value={item.location}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Quantity:</label>
                            <input
                                type="text"
                                name="quantity"
                                value={item.quantity}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Contact Number:</label>
                            <input
                                type="text"
                                name="contactNumber"
                                value={item.contactNumber}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={item.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Photo:</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100" />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Item
                    </button>
                </form>
                <ToastContainer />
            </div>
        </>
    );
};

export default AddItem;
