import React from 'react';
import '../style/footer.css';
import img3 from './images/shivani.png';

function Footer() {
  return (
    <div className="front-page">
      <h1>Welcome to Our Website!</h1>
      <img src={img3} alt="Description of Image" />
      <p>Here you can add your content...</p>
    </div>
  )
}

export default Footer