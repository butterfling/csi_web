import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; // Make sure to adjust the path to your CSS file


import bImage from './images/b.jpg';
import cImage from './images/c.jpg';
import dImage from './images/d.jpg';

function ImageCarousel() {
    const [imageIndex, setImageIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    let aImage='https://picsum.photos/600/300/?random';

    const images = [aImage, bImage, cImage, dImage];

    const slideImage = (index) => {
        const newIndex = index === images.length ? 0 : index < 0 ? images.length - 1 : index;
        setImageIndex(newIndex);
    };

    useEffect(() => {
        const id = setInterval(() => slideImage(imageIndex + 1), 5000);
        setIntervalId(id);

        return () => clearInterval(id);
    }, [imageIndex]);

    const updateClick = (increment) => {
        clearInterval(intervalId);
        const newIndex = imageIndex + increment;
        slideImage(newIndex);
    };

    return (
        <section className="wrapper">
            <i className="fa-solid fa-arrow-left button" id="prev" onClick={() => updateClick(-1)}></i>
            <div className="image-container">
                <div className="carousel" style={{ transform: `translate(-${imageIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index}`} />
                    ))}
                </div>
                <i className="fa-solid fa-arrow-right button" id="next" onClick={() => updateClick(1)}></i>
            </div>
        </section>
    );
}

export default ImageCarousel;
