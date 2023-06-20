import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext'
import { Link } from 'react-router-dom';

const Header = () => {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);

 const handleLogoutClick = () => {
    handleLogout();
    
    window.location.href = "/";
  };
  return (
   <header>
      <div id="navigation_container">
        <div className="navigation_content">
              <a href="/">Home</a>
              <a href="/create">Create</a>
              <a href="/auth">Community</a>
    
        </div>
        
        {isLoggedIn ? (
        <div className="navigation_content">
          <Link to="/profile">profile</Link>
            <Link onClick={handleLogoutClick} to="/">logout</Link>
        </div>
        ) : (
          <div className="navigation_content">
          <Link to="/login">Sign in</Link>
            <Link to="/register">Sign up</Link>
        </div>
        )}
      </div>
      <h2 id="title">CharaMe</h2>
  </header>
  )
}

export default Header
