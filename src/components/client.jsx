import React from 'react';

const ClientsSlider = () => {
  const clientImages = [
    'baidyanath.jpg',
    'apl.jpg',
    'greenlam.jpg',
    'jubilant.jpg',
    'nokia.jpg',
    'nucleus.jpg',
    'sar.jpg',
    'hfcl.jpg',
    'bhushan-steel.jpg',
    'Book-drive.jpg',
    'eep.jpg',
    'hero.jpg',
    'jakson.jpg',
    'igt.jpg',
    'ethio.jpg',
    'aqualite.jpg'
  ];

  const images = [...clientImages, ...clientImages];

  return (
    <section style={{ backgroundColor: 'rgb(249, 248, 244)', padding: '50px 20px', overflow: 'hidden' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>
        Our Clients
      </h2>
      <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#555', marginBottom: '30px' }}>
        We’ve Helped Industry Leaders Transform Their Brand
      </p>
      <div style={{ display: 'flex', overflow: 'hidden', position: 'relative' }}>
        <div className="slider-track">
          {images.map((img, index) => (
            <div key={index} className="logo-slide">
              <img src={`/${img}`} alt={`client-${index}`} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .slider-track {
          display: flex;
          width: calc(250px * ${images.length});
          animation: scroll 20s linear infinite;
          background-color: rgb(249, 248, 244);
        }

        .logo-slide {
          height: 100px;
          width: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        .logo-slide img {
          max-height: 80px;
          max-width: 200px;
          object-fit: contain;
          filter: grayscale(0.3);
          transition: transform 0.3s ease;
        }

        .logo-slide img:hover {
          transform: scale(1.05);
          filter: grayscale(0);
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .logo-slide {
            width: 180px;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsSlider;
