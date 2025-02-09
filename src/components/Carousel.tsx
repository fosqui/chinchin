"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";



function Carousel() {
  const [index, setIndex] = useState(0);
  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((src, i) => (
            <div key={i} className="carousel-item">
              <Image src={src} alt={`Imagen ${i + 1}`} width={1920} height={1080}/>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Carousel;
