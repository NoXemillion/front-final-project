import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 

const Header = () => {
  const [isManagementOpen, setIsManagementOpen] = useState(false);
  const [isReportsOpen, setIsReportsOpen] = useState(false);

  const managementRef = useRef(null);
  const reportsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (managementRef.current && !managementRef.current.contains(event.target)) {
        setIsManagementOpen(false);
      }
      if (reportsRef.current && !reportsRef.current.contains(event.target)) {
        setIsReportsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsManagementOpen(false);
    setIsReportsOpen(false);
  };

  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <Link 
            to="/" 
            className="admin-title text-xl font-bold"
          >
            Admin Dashboard
          </Link>
        </div>
        <div className="flex space-x-6">

          <div className="relative" ref={managementRef}>
            <button
              onClick={() => setIsManagementOpen(!isManagementOpen)}
              className="text-white hover:text-blue-200"
            >
              Management ▼
            </button>
            {isManagementOpen && (
              <div className="absolute bg-white text-black mt-2 rounded shadow-lg w-48">
                <Link to="/products" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>
                  Product Management
                </Link>
                <Link to="/inventory" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>
                  Inventory Management
                </Link>
                <Link to="/orders" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>
                  Order Management
                </Link>
                <Link to="/users" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>
                  User Management
                </Link>
              </div>
            )}
          </div>

          <div className="relative" ref={reportsRef}>
            <button
              onClick={() => setIsReportsOpen(!isReportsOpen)}
              className="text-white hover:text-blue-200"
            >
              Reports ▼
            </button>
            {isReportsOpen && (
              <div className="absolute right-0 bg-white text-black mt-2 rounded shadow-lg w-48 z-50">
                <Link to="/cms" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>
                  Content Management
                </Link>
                <Link to="/reports" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>
                  Reports and Analytics
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
