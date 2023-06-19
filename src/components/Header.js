import React from 'react'

const Header = () => {
  return (
   <header>
      <div id="navigation_container">
        <div className="navigation_content">
              <a href="/">Home</a>
              <a href="/free">Create</a>
              <a href="/auth">Community</a>
    
        </div>
        <div className="navigation_content">
          <a href="/login">Sign in</a>
          <a href="/register">Sign up</a>
        </div>
      </div>
      <h2 id="title">CharaMe</h2>
  </header>
  )
}

export default Header
