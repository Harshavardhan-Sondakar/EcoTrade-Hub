// Remove BrowserRouter import from Nav.js

import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li>
              <a>Explore</a>
              <ul className="p-2">
                <li><a>Recycle</a></li>
                <li><a>Food</a></li>
              </ul>
            </li>
            <li><a>About Us</a></li>
          </ul>
        </div>
        <Link to='/home'><a className="btn text-gray-500">EcoTrade Hub</a></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-grey-700">
        <Link to="/home"><li><a>Home</a></li></Link>
        <Link to="/recycle"><li><a>Search</a></li></Link>
          <li>
            <details>
              <summary>Community</summary>
              <ul className="p-2">
                <Link to="/add-post"><li><a>Post Ideas</a></li></Link>
                <Link to="/posts"><li><a>Explore Ideas</a></li></Link>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Marketplace</summary>
              <ul className="p-2">
                <Link to="/add-item"><li><a>Sell</a></li></Link>
                <Link to="/items"><li><a>Buy</a></li></Link>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Admin</summary>
              <ul className="p-2">
                <Link to="/Orders"><li><a>Orders</a></li></Link>
                <Link to="/dash"><li><a>Dashboard</a></li></Link>
                <Link to="/adminpost"><li><a>Posts</a></li></Link>
                <Link to="/adminitem"><li><a>Items</a></li></Link>
              </ul>
            </details>
          </li>
          <li><Link to="/about"><a>About Us</a></Link></li>
        </ul>
      </div>
      <div className="navbar-end">
      <Link to="/login"><a className="btn">Login</a></Link>
      </div>
    </div>
  );
}

export default Nav;
