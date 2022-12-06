import "./VisualizadorMascota.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPetByID } from "../services/mascotas";
import DatosMascota from "./DatosMascota";
import CarouselMascota from "./Carousel/CarouselMascota/CarouselMascota";

const VisualizadorMascota = () => {
  let datosPet = useParams();
  const [pet, setPet] = useState({});
  var a = window.location.href;
  var id = a.split("lost/")[1];
  useEffect(() => {
    getPetByID(id, "lost")
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
