// src/components/Listing.js
import React from 'react';
import data from './data'; // Adjust the path as necessary

const Listing = () => {
  const { children } = data.data;

  return (
    <div className="listing-container">
      {children.map((child, index) => {
        const { title, selftext_html, url, score } = child.data;

        return (
          <div key={index} className="card">
            <div className="card-title">
              <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
            </div>
            <div className="card-description" dangerouslySetInnerHTML={{ __html: selftext_html || '<p>No description available.</p>' }} />
            <div className="card-score">
              Score: {score}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listing;
