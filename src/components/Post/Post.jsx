import "./Post.css";
import imagenMascota from "../../recursos/Post/perros.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Post = ({ mascota }) => {
  const [masc, setMas] = useState(mascota);

  const rutaMascota = {
    pathname: "/mascotas/" + masc.id,
  };
  return (
    <div className="contenedor-general-carta">
      <div className="nombre-mascota">
        <h1 id="nombre">{masc.name}</h1>
      </div>
      <div className="contenedor-carta">
        <div className="informacion-principal-mascota">
          <div className="info">
            <h1 id="direccion">{masc.address}</h1>
            <h1 id="fechaDesaparicion">{masc.disappearanceDate}</h1>
          </div>
          <img id="img" src={imagenMascota} alt="imagen-mascota" />
        </div>
        <div className="informacion-secundaria-mascota">
          <p>{mascota.description}</p>
          <Link to={rutaMascota}>Mas informacion </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
