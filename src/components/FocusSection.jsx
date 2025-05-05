import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faObjectGroup,
  faCameraRetro,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';

const FocusCard = ({ icon, title, desc, borderColor }) => {
  const [hover, setHover] = useState(false);

  const cardStyle = {
    backgroundColor: '#fff',
    padding: '30px 20px',
    borderRadius: '10px',
    boxShadow: hover
      ? '0 8px 30px rgba(0,0,0,0.2)'
      : '0 4px 20px rgba(0,0,0,0.05)',
    width: '350px',
    minHeight: '220px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transform: hover ? 'translateY(-6px)' : 'translateY(0)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: `1px solid ${hover ? borderColor : 'transparent'}`,
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FontAwesomeIcon icon={icon} style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#333' }} />
      <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px' }}>{title}</div>
      <div style={{ fontSize: '0.9rem', color: '#777', textAlign: 'center' }}>{desc}</div>
      <div style={{
        height: '4px',
        width: '100%',
        backgroundColor: borderColor,
        marginTop: '15px',
        borderRadius: '2px',
        transition: 'width 0.3s ease',
      }}></div>
    </div>
  );
};

const FocusSection = () => {
  const styles = {
    section: {
      backgroundColor: '#f9f9f9',
      padding: '60px 20px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#222',
    },
    subHeading: {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '40px',
    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Expertise Beyond SAP</h2>
      <p style={styles.subHeading}>We understand your requirement and provide quality works.</p>
      <div style={styles.cardsContainer}>
        <FocusCard
          icon={faLaptopCode}
          title="Custom Solution Development"
          desc="Precision-crafted solutions for business innovation. Advanced algorithms for precise functionality."
          borderColor="#f75c5c"
        />
        <FocusCard
          icon={faObjectGroup}
          title="Mobility Services"
          desc="Boost agility with secure mobile access and responsive apps for seamless user experience & enhanced productivity."
          borderColor="#4caf50"
        />
        <FocusCard
          icon={faCameraRetro}
          title="Technology Consulting"
          desc="Elevate growth with strategic optimization. Integrate ML for dynamic innovation and accelerated performance."
          borderColor="#9c27b0"
        />
        <FocusCard
          icon={faMobileAlt}
          title="Analytics & Reporting"
          desc="Data-driven decisions with SAP analytics. Optimize ETL for operational efficiency and enhanced insights."
          borderColor="#ffc107"
        />
      </div>
    </section>
  );
};

export default FocusSection;
