import React, { useEffect } from 'react';
import '../assets/css/AdminPanel.css'

const AdminPanel = () => {
  useEffect(() => {
    document.body.classList.add('onlyWhite-header');

    return () => {
      document.body.classList.remove('onlyWhite-header');
    
    };
  }, []);
  return (
    <div className="adminPanelContainer">
      <h2>Admin Panel</h2>
      <div className="users_container">

      </div>
    </div>
  )
}

export default AdminPanel
