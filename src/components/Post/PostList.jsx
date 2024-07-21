import React, { useState, useEffect } from 'react';
import PostService from './PostService';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const result = await PostService.getPosts();
        setPosts(result.data);
    };

    const deletePost = async (id) => {
        await PostService.deletePost(id);
        loadPosts();
    };

    const renderHTML = (htmlString) => {
        return { __html: htmlString };
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 pt-8 pb-16 max-w-xl">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">Recycling Ideas</h2>
                {posts.map(post => (
                    <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden mb-10">
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <img 
                                    src={`https://avatar.iran.liara.run/public/boy?username=${post.email}`} 
                                    alt="Profile" 
                                    className="h-12 w-12 rounded-full bg-gray-300"  
                                />
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{post.name}</div>
                                    <div className="text-sm text-gray-500">{post.email}</div>
                                </div>
                                <div className="ml-auto text-sm text-gray-500">
                                    {new Date(post.date).toLocaleDateString()}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={renderHTML(post.content)}></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
