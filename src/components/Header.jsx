import  { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx"; // Importing the hamburger icon
import { Link, useLocation } from 'react-router-dom';


function Header() {
  const location = useLocation(); 
  const [menuOpen, setMenuOpen] = useState(false); 


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
        <button className="hamburger" onClick={toggleMenu}>
        <RxHamburgerMenu size={30} />
      </button>
      <div className="logo">
        <img
          src="/public_restroom_finder.png"
          alt="Public Restroom Finder Logo"
          className="logo-img"
          style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
        />
      </div>

      
      

     
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        
        {location.pathname === '/' ? (
          <Link to="/add-restrooms">Add Restrooms</Link>
        ) : (
          <Link to="/">Find Public Restrooms</Link>
        )}
        <Link to="/about-us">About Us</Link>
      </nav>
    </header>
  );
}

export default Header;
