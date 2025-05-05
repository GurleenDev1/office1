import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faCogs, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const FeatureCard = ({ icon, heading, text }) => {
  const [hover, setHover] = useState(false);

  const boxStyle = {
    backgroundColor: hover ? '#ffd700' : '#f7c600',
    padding: '40px 20px',
    flex: 1,
    textAlign: 'center',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: hover ? '0 8px 20px rgba(0,0,0,0.2)' : 'none',
    transform: hover ? 'translateY(-5px)' : 'translateY(0)',
  };

  return (
    <div
      style={boxStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div style={{ fontWeight: '600', marginBottom: '10px' }}>{heading}</div>
      <div style={{ fontSize: '0.9rem', color: '#444' }}>{text}</div>
    </div>
  );
};

const FeatureSection = () => {
  const styles = {
    containerWrapper: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      top: '-80px',
      zIndex: 2,
    },
    container: {
      display: 'flex',
      width: '90%',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      flexWrap: 'wrap',
    },
    titleBox: {
      backgroundColor: '#ffffff',
      padding: '40px 30px',
      flex: 1.5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minWidth: '240px',
    },
  };

  return (
    <div style={styles.containerWrapper}>
      <div style={styles.container}>
        {/* Title Box */}
        <div style={styles.titleBox}>
          <h3 style={{ margin: 0 }}>WE PROVIDE</h3>
          <h2 style={{ margin: 0 }}>AWESOME SERVICES</h2>
        </div>

        {/* Feature Cards */}
        <FeatureCard
          icon={faLaptop}
          heading="BUSINESS SIMPLIFIED"
          text="Your One-Stop Destination for SAP, and Digital Transformations"
        />
        <FeatureCard
          icon={faCogs}
          heading="EASY TO CUSTOMIZE"
          text="Customized Solutions For Your Need"
        />
        <FeatureCard
          icon={faPaperPlane}
          heading="RETAIL"
          text="Reshaping the retail landscape"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
