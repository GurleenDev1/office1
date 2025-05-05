import React from 'react';

const HeroSection = () => {
  const styles = {
    hero: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '100px 20px 40px', // extra top padding for fixed navbar
      backgroundColor: '#e1f1ff', //'#f4fcff'
      minHeight: '80vh',
    },
    quote: {
      maxWidth: '50%',
      fontSize: '1.8rem',
      fontWeight: '500',
      color: '#333',
      lineHeight: '1.6',
      marginLeft: '40PX',
    },
    rotatingLogo: {
      height: '150px',
      animation: 'spin 6s linear infinite',
      marginRight: '250px',
       
    },
    // Define keyframes using a <style> tag below
  };

  return (
    <>
      {/* Keyframes defined in JSX */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      <div style={styles.hero}>
        {/* Left: Quote */}
        <div style={styles.quote}>
          “Empowering innovation through intelligent SAP solutions – transforming complexity into simplicity.”
        </div>

        {/* Right: Rotating Logo */}
        <div>
          <img
            src="/O.png"
            alt="SAP Logo"
            style={styles.rotatingLogo}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
