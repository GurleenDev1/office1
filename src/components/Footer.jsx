import React from 'react';
import AboutUs from './AboutUs';
import { FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Left Links */}
        <div style={styles.left}>
          <ul style={styles.ul}>
            <li style={styles.li}><a href="Aboutus" style={styles.link}>About us </a></li>
            <li style={styles.li}><a href="#" style={styles.link}>About</a></li>
            <li style={styles.li}><a href="#" style={styles.link}>Work With Us</a></li>
            <li style={styles.li}><a href="#" style={styles.link}>Contact</a></li>
          </ul>
        </div>

        {/* Center Logo */}
        <div style={styles.center}>
          <img src="/O.png" alt="Logo" style={styles.logo} />
        </div>

        {/* Right Social Icons (vertical layout) */}
        <div style={styles.right}>
          <a href="#" style={styles.iconLink}><FaInstagram size={24} color="#333" /></a>
          <a href="#" style={styles.iconLink}><FaPinterest size={24} color="#333" /></a>
        </div>
      </div>

      {/* Bottom Text */}
      <div style={styles.bottom}>
        <p>terms & conditions | privacy policy | copyright © 2025 Orane Consulting</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f9f8f4',
    padding: '40px 20px 20px',
    textAlign: 'center',
    color: '#444',
    fontFamily: 'sans-serif',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  left: {
    textAlign: 'left',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  li: {
    margin: '8px 0',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  center: {
    margin: '20px',
  },
  logo: {
    width: '100px',
    height: 'auto',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
  },
  iconLink: {
    textDecoration: 'none',
  },
  bottom: {
    marginTop: '30px',
    fontSize: '12px',
    color: '#999',
  },
};

export default Footer;
