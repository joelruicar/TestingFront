import "./VisualizadorMascota.css";
import { useEffect, useState } from "react";
import { getPetByID } from "../services/mascotas";
import DatosMascota from "./DatosMascota";
import CarouselMascota from "./Carousel/CarouselMascota/CarouselMascota";

const VisualizadorMascota = () => {
  const [pet, setPet] = useState({});

  useEffect(() => {
    getPetByID(114, "lost")
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        setPet(data);
      })
      .catch((error) => {
        console.error("Hay un error", error);
      });
  }, []);

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
