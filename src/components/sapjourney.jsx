// src/components/FeaturedArticles.js
import React from 'react';
import { articles } from '../data/articles';

const FeaturedArticles = () => {
  return (
    <div style={{ backgroundColor: '#002B36', color: 'white', padding: '2rem', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Targeting Issues of Anxiety
      </h2>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>
        {articles.map((article) => (
          <div
            key={article.id}
            style={{
              width: '22%',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <img
              src={article.image}
              alt={article.title}
              style={{
                width: '100%',
                borderRadius: '8px',
                display: 'block',
                transition: 'transform 0.3s ease',
              }}
            />
            <div
              className="hover-content"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.8)',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <h4>{article.title}</h4>
              <p style={{ fontSize: '0.8rem' }}>{article.content}</p>
              <p style={{ fontSize: '0.7rem', color: '#ccc' }}>{article.date}</p>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .hover-content:hover {
            opacity: 1 !important;
          }
          .hover-content:hover ~ img {
            transform: scale(1.05);
          }
          div:hover > .hover-content {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default FeaturedArticles;
