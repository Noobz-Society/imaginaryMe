import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext'
import { Link, useLocation } from 'react-router-dom';
import Cookies from "universal-cookie";
const cookies = new Cookies();

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

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const token = cookies.get("TOKEN");
    if (token) {
      // Parse the token as JWT
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      // Access the role property
      const role = tokenData.role;
      if (role === "admin") {
        setIsAdmin(true);
      }
    }
  }, []);


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
            <Link onClick={handleLogoutClick} to="/">Log out<i class="lni lni-enter"></i></Link>
           {isAdmin ? (

            <Link to="/admin"><button className="white-button">Admin Panel</button></Link>
           ): (

              <></>
           )}
      
            
        </div>
        ) : (
          <div className="navigation_content">
          <Link to="/login" className={isLinkActive("/login")}>Sign in</Link>
            <Link to="/register" className={isLinkActive("/register")}>Sign up</Link>
            

        </div>
        )}
      </div>
      <h2 id="title">{location.pathname === '/create' ? 'Creation Time' : 'CharaMe'}</h2>

  </header>
  )
}

export default Header
