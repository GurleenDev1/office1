import React from 'react';

const AboutUs = () => {
  const styles = {
    section: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '60px 0',
      backgroundColor: '#fff',
    },
    wrapper: {
      display: 'flex',
      width: '90%',
      maxWidth: '1200px',
      flexWrap: 'wrap',
    },
    imageContainer: {
      flex: '1',
      minWidth: '45%',
      minHeight: '450px',
      backgroundImage: 'url("/office.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '8px 0 0 8px',
    },
    contentContainer: {
      flex: '1.2',
      minWidth: '55%',
      backgroundColor: '#fff',
      padding: '30px 40px',
      borderRadius: '0 8px 8px 0',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '350px',
      position: 'relative',
      marginTop: '50px',
      marginLeft: '-30px',

    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#222',
    },
    paragraph: {
      fontSize: '1rem',
      color: '#555',
      lineHeight: '1.6',
      marginBottom: '12px',
    },
    gradientLine: {
      height: '4px',
      width: '100px',
      background: 'linear-gradient(to right, #f7c600, #00bcd4, #673ab7)',
      position: 'absolute',
      bottom: '20px',
      left: '40px',
      borderRadius: '2px',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.wrapper}>
        <div style={styles.imageContainer}></div>
        <div style={styles.contentContainer}>
          <h2 style={styles.heading}>About Us.</h2>
          <p style={styles.paragraph}>
            <strong>Our Journey</strong><br />
            Established in 2009, our journey began with a singular focus to deliver unparalleled SAP services.
            Over the years, this mission has propelled us to venture beyond traditional boundaries and embrace
            a holistic digital transformation ethos.
          </p>
          <p style={styles.paragraph}>
            With 16 years of dedicated expertise, Orane has consistently delivered top-notch SAP consulting
            services. We look forward to the next phase of our journey, continuing to provide cutting-edge SAP
            solutions and forging lasting relationships with our clients.
          </p>
          <div style={styles.gradientLine}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
