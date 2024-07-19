import React, { useState } from 'react';
import image1 from '../../assets/Images/image1.png';
import image2 from '../../assets/Images/image2.webp';
import image3 from '../../assets/Images/image3.jpg';
import './index.css';

const images = [
  image1,
  image2,
  image3,
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className="gallery-thumbnail"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
