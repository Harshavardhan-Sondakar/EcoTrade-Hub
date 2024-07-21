import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/Post/PostList';
import CreatePost from './components/Post/CreatePost';
import Home from "./components/Home"
import Login from "./components/Authorization/Login"
import About from "./components/About"
import Section from "./components/Section"
import Recycle from "./components/Recycle"
import ItemList from './components/Market/ItemList';
import AddItem from './components/Market/AddItem';
import Register from "./components/Authorization/Register";
import Orders from './components/Admin/OrderList';
import Dash from './components/Admin/Dashboard';
import Adminpost from './components/Admin/Post';
import AdminItem from './components/Admin/AdminItem';
import Price from './components/Market/Price'
import "./App.css";
import Nav from './components/Nav';


const App = () => {
    return (
        <Router>
            <div className="container">
                <Nav></Nav>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/price" element={<Price />} />
                    <Route path="/adminitem" element={<AdminItem />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/dash" element={<Dash />} />
                    <Route path="/adminpost" element={<Adminpost />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/section" element={<Section />} />
                    <Route path="/recycle" element={<Recycle />} />
                    <Route path="/post" element={<PostList />} />
                    <Route path="/posts" element={<PostList />} />
                    <Route path="/items" element={<ItemList />} />
                    <Route path="/add-item" element={<AddItem />} />
                    <Route path="/add-post" element={<CreatePost />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
