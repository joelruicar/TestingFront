import { NavLink } from "react-router-dom";
import { faCat, faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
  return (
    <>
      <section id="landing-page">
        <h1 id="titulo">GPets</h1>
        <h3 id="subtitulo">
          <FontAwesomeIcon icon={faDog} /> Empieza tu búsqueda{" "}
          <FontAwesomeIcon icon={faCat} />{" "}
        </h3>
        <div className="contenedor-botones">
          <NavLink to="/LostPet">Mi mascota se ha perdido</NavLink>
          <NavLink to="/FoundPet">He encontrado una mascota</NavLink>
        </div>
        <NavLink to="/UnderConstruction" id="boton-ayuda">
          Quiero ayudar a encontrar mascotas
        </NavLink>
      </section>
    </>
  );
};

export default Landing;
