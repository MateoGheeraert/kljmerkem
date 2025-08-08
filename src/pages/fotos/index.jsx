import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
    {
      src: foto1,
      alt: "KLJ Merkem foto - Jeugdbeweging Merkem activiteiten 1",
    },
    {
      src: foto2,
      alt: "KLJ Merkem foto - Jeugdbeweging Merkem activiteiten 2",
    },
    {
      src: foto3,
      alt: "KLJ Merkem foto - Jeugdbeweging Merkem activiteiten 3",
    },
    {
      src: foto4,
      alt: "KLJ Merkem foto - Jeugdbeweging Merkem activiteiten 4",
    },
    {
      src: foto5,
      alt: "KLJ Merkem foto - Jeugdbeweging Merkem activiteiten 5",
    },
    {
      src: foto6,
      alt: "KLJ Merkem foto - Jeugdbeweging Merkem activiteiten 6",
    },
    {
      src: foto7,
      alt: "KLJ Merkem foto - Jeugdbeweging Merkem activiteiten 7",
    },
    {
      src: foto8,
      alt: "KLJ Merkem foto - Jeugdbeweging Merkem activiteiten 8",
    },
    {
      src: foto9,
      alt: "KLJ Merkem foto - Jeugdbeweging Merkem activiteiten 9",
    },
    {
      src: foto10,
      alt: "KLJ Merkem foto - Jeugdbeweging Merkem activiteiten 10",
    },
    {
      src: foto11,
      alt: "KLJ Merkem foto - Jeugdbeweging Merkem activiteiten 11",
    },
    {
      src: foto12,
      alt: "KLJ Merkem foto - Jeugdbeweging Merkem activiteiten 12",
    },
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
      <Helmet>
        <title>Foto's KLJ Merkem - Galerij Jeugdbeweging Merkem</title>
        <meta
          name='description'
          content="Bekijk de foto's van KLJ Merkem! Onze galerij toont de leukste momenten van de jeugdbeweging Merkem activiteiten en evenementen."
        />
        <meta
          name='keywords'
          content="KLJ Merkem foto's, galerij KLJ Merkem, jeugdbeweging Merkem foto's, Merkem activiteiten foto's, KLJ beelden"
        />
        <link rel='canonical' href='https://kljmerkem.be/#/fotos' />
        <meta
          property='og:title'
          content="Foto's KLJ Merkem - Galerij Jeugdbeweging Merkem"
        />
        <meta
          property='og:description'
          content="Bekijk de foto's van KLJ Merkem! Onze galerij toont de leukste momenten."
        />
        <meta property='og:url' content='https://kljmerkem.be/#/fotos' />
      </Helmet>
      <h1 className='text-center mb-5'>Foto Galerij KLJ Merkem</h1>

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
