import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostService from './PostService';


const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const savePost = async (e) => {
        e.preventDefault();
        let post = { title, content, name, email };
        await PostService.createPost(post);
        navigate('/posts');
    };

    return (
        <div className="max-w-lg mx-auto mt-8 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Create a New Post</h2>
            <form onSubmit={savePost}>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Title</label>
                    <input
                        type="text"
                        placeholder="Post Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Content</label>
                    <textarea
                        placeholder="What's on your mind?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full h-32 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;
