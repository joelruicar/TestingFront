import "./VisualizadorMascota.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatosMascota from "./DatosMascota";
import CarouselMascota from "../Carousel/CarouselMascota/CarouselMascota";

const VisualizadorMascota = () => {
  let datosPet = useParams();
  const [pet, setPet] = useState({});
  let { id } = useParams();
  useEffect(() => {}, []);

  return (
    <>
      <div className="contenedor-mascota">
        <CarouselMascota pet={pet}></CarouselMascota>
        <DatosMascota datos={pet}></DatosMascota>
      </div>
    </>
  );
};

export default VisualizadorMascota;
