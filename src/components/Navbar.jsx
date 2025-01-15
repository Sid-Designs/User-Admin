import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('id');
    window.location.href = '/login';
  }
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">My Website</Link>
        <div>
          <Link to="/" className="text-white mx-2">Home</Link>
          <Link to="/user" className="text-white mx-2">User</Link>
          <Link to="/admin" className="text-white mx-2">Admin</Link>
          <Link to="/register" className="text-white mx-2">Register</Link>
          <Link to="/login" className="text-white mx-2">Login</Link>
          <button className="text-white mx-2" onClick={logout}>Log Out</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
