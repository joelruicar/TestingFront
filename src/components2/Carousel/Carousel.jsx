import React from "react";
import { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ setImagenes}) => {
  const [slides, setSlides] = useState([]);


  function añadirSlide (imagenNueva){
    if(slides.length == 4) alert("Ha subido el máximo de imagenes")
    setSlides([...slides,imagenNueva]);
    setImagenes(slides);
  }

  useEffect(()=>{
    console.log(slides);
  },[slides])
  return (
    <div className="carousel">
      <div className="contenedor-imagenes-pequeñas-carousel">
        <div className="imagen-pequeña-carousel">
          {slides[0] && (< img src={URL.createObjectURL(slides[0])} alt="" />)} 
        </div>
        <div className="imagen-pequeña-carousel">
        { slides[1] && (< img src={URL.createObjectURL(slides[1])} alt="" />)} 
        </div>
        <div className="imagen-pequeña-carousel">
        {slides[2] && (< img src={URL.createObjectURL(slides[2])} alt="" />)} 
        </div>
      </div>
      <div className="carousel-inner">
      {slides[3] && (< img src={URL.createObjectURL(slides[3])} alt="" />)} 
        <input type="file" accept=".png,.jpg"
        onChange={(event) => {
          añadirSlide(event.target.files[0])
        }} />
        {!slides[3] && <p>SUBIR IMAGENES</p>}
      </div>
    </div>
  );
};

export default Carousel;
