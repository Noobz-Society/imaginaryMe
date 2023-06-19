import React from 'react'

const Navigation = () => {
  return (
   <header>
      <div id="navigation_container">
        <div className="navigation_content">
              <a href="/">Home</a>
              <a href="/free">Create</a>
              <a href="/auth">Community</a>
    
        </div>
        <div className="navigation_content">
          <a href="/connexion">Sign in</a>
          <a href="/register">Sign up</a>
        </div>
      </div>
  </header>
  )
}

export default Navigation
