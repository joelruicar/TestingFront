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
        <h3>{masc.name}</h3>
      </div>
      <div className="contenedor-carta">
        <div className="informacion-principal-mascota">
          <div className="info">
            <h3>{masc.address}</h3>
            <h3>{masc.disappearanceDate}</h3>
          </div>
          <img src={imagenMascota} alt="imagen-mascota" />
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
