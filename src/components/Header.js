import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);
  const location = useLocation();

 const handleLogoutClick = () => {
    handleLogout();
    
    window.location.href = "/";
  };

  const isLinkActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
   <header>
      <div id="navigation_container">
        <div className="navigation_content">
          <Link to="/" className={isLinkActive("/")}>Home</Link>
          <Link to="/create" className={isLinkActive("/create")}>Create</Link>
          <Link to="/community" className={isLinkActive("/community")}>Community</Link>
      
        </div>
        
        {isLoggedIn ? (
        <div className="navigation_content">
          <Link to="/profile" className={isLinkActive("/profile")}>Profile</Link>
            <Link onClick={handleLogoutClick} to="/">Log out</Link>
        </div>
        ) : (
          <div className="navigation_content">
          <Link to="/login" className={isLinkActive("/login")}>Sign in</Link>
            <Link to="/register" className={isLinkActive("/register")}>Sign up</Link>
        </div>
        )}
      </div>
      <h2 id="title">CharaMe</h2>
  </header>
  )
}

export default Header
