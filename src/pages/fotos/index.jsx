import React, { useState, useEffect } from "react";
import "./style.css";
import foto1 from "../../images/fotos/foto1.jpg";
import foto2 from "../../images/fotos/foto2.jpg";
import foto3 from "../../images/fotos/foto3.jpg";
import foto4 from "../../images/fotos/foto4.jpg";
import foto5 from "../../images/fotos/foto5.jpg";
import foto6 from "../../images/fotos/foto6.jpg";
import foto7 from "../../images/fotos/foto7.jpg";
import foto8 from "../../images/fotos/foto8.jpg";
import foto9 from "../../images/fotos/foto9.jpg";
import foto10 from "../../images/fotos/foto10.jpg";
import foto11 from "../../images/fotos/foto11.jpg";
import foto12 from "../../images/fotos/foto12.jpg";

const Fotos = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const photos = [
    { src: foto1, alt: "Foto 1" },
    { src: foto2, alt: "Foto 2" },
    { src: foto3, alt: "Foto 3" },
    { src: foto4, alt: "Foto 4" },
    { src: foto5, alt: "Foto 5" },
    { src: foto6, alt: "Foto 6" },
    { src: foto7, alt: "Foto 7" },
    { src: foto8, alt: "Foto 8" },
    { src: foto9, alt: "Foto 9" },
    { src: foto10, alt: "Foto 10" },
    { src: foto11, alt: "Foto 11" },
    { src: foto12, alt: "Foto 12" },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? photos.length - 1 : prevIndex - 1
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent body scroll when lightbox is open
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen, photos.length]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='container mt-5 flyinleft'>
      <h1 className='text-center mb-5'>Galerij</h1>

      {/* Masonry Grid */}
      <div className='masonry-grid'>
        {photos.map((photo, index) => (
          <div
            key={index}
            className='masonry-item'
            onClick={() => openLightbox(index)}
          >
            <img src={photo.src} alt={photo.alt} className='masonry-image' />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className='lightbox-overlay' onClick={closeLightbox}>
          <div
            className='lightbox-content'
            onClick={(e) => e.stopPropagation()}
          >
            <button className='lightbox-close' onClick={closeLightbox}>
              ×
            </button>
            <button className='lightbox-prev' onClick={prevImage}>
              ❮
            </button>
            <img
              src={photos[currentImageIndex].src}
              alt={photos[currentImageIndex].alt}
              className='lightbox-image'
            />
            <button className='lightbox-next' onClick={nextImage}>
              ❯
            </button>
            <div className='lightbox-counter'>
              {currentImageIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fotos;
