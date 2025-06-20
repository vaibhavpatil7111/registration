import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">UserPortal</div>
      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </nav>
  );
}

export default Navbar;