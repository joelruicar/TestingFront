import React from "react";
import { useState, useEffect } from "react";
import "../Carousel.css";
const CarouselMascota = ({ pet }) => {
  const [slides, setSlides] = useState(pet.pictures);

  useEffect(() => {
    setSlides(pet.pictures);
    console.log(slides);
  }, [pet, slides]);

  return (
    <div className="carousel">
      <div className="contenedor-imagenes-pequeñas-carousel">
        <div className="imagen-pequeña-carousel">
          {slides && slides[1] && <img src={slides[1].image_url} alt="" />}
        </div>
        <div className="imagen-pequeña-carousel">
          {slides && slides[2] && <img src={slides[2].image_url} alt="" />}
        </div>
        <div className="imagen-pequeña-carousel">
          {slides && slides[3] && <img src={slides[3].image_url} alt="" />}
        </div>
      </div>
      <div className="carousel-inner">
        <img
          id="fotos"
          src={
            "http://127.0.0.1:8000/media/api/posts/114/pictures/IMG-20200114-WA0022.jpg"
          }
          alt="aaa"
        />
      </div>
    </div>
  );
};

export default CarouselMascota;
