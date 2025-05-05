import React from 'react';

const Navbar = () => {
  const styles = {
    navbar: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding: '10px 20px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }
      ,
    logo: {
      height: '50px',
    },
    rightLogo: {
        height: '50px',
        width: '160px', // or any size you prefer
        objectFit: 'contain',
      },
    linksContainer: {
      listStyle: 'none',
      display: 'flex',
      gap: '30px',
      margin: 0,
      padding: 0,
    },
    dropdown: {
      position: 'relative',
    },
    dropbtn: {
      background: 'none',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
    },
    dropdownContent: {
      display: 'none',
      position: 'absolute',
      backgroundColor: '#f9f9f9',
      minWidth: '150px',
      boxShadow: '0px 8px 16px rgba(0,0,0,0.2)',
      zIndex: 1,
    },
    dropdownItem: {
      color: 'black',
      padding: '10px 15px',
      display: 'block',
      textDecoration: 'none',
    },
    dropdownItemHover: {
      backgroundColor: '#eaeaea',
    }
  };

  // To handle hover for dropdown via React
  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector('.dropdown-content').style.display = 'block';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector('.dropdown-content').style.display = 'none';
  };

  return (
    <nav style={styles.navbar}>
      {/* Left Logo */}
      <div>
        <img src="/orane.png" alt="Orane Logo" style={styles.logo} />
      </div>

      {/* Middle Buttons with Dropdowns */}
      <ul style={styles.linksContainer}>
        <li style={styles.dropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button style={styles.dropbtn}>Corporate Overview</button>
          <div className="dropdown-content" style={styles.dropdownContent}>
            <a href="#about" style={styles.dropdownItem}>About Us</a>
            <a href="#contact" style={styles.dropdownItem}>Contact Us</a>
          </div>
        </li>

        <li style={styles.dropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button style={styles.dropbtn}>SAP Solution</button>
          <div className="dropdown-content" style={styles.dropdownContent}>
            <a href="#rise" style={styles.dropdownItem}>Rise with SAP</a>
          </div>
        </li>

        <li style={styles.dropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button style={styles.dropbtn}>Industries</button>
          <div className="dropdown-content" style={styles.dropdownContent}>
            <a href="#retail" style={styles.dropdownItem}>Retail</a>
          </div>
        </li>
      </ul>

      {/* Right Logo */}
      <div>
  <img
    src="/sap-silver-partner.png"
    alt="SAP Silver Partner"
    style={styles.rightLogo}
  />
</div>

    </nav>
  );
};

export default Navbar;
