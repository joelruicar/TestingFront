export default function DatosMascota({ datos }) {
  return (
    <section className="contenedor-datos-mascota">
      <h1 className="titulo-datos">Datos de la mascota</h1>

      <label>Nombre</label>
      <h1 id="nombre">{datos.name}</h1>

      <label>Especie</label>
      <h3 id="especie">{datos.species}</h3>

      <label>Sexo</label>
      {datos.sex === "H" && <p id="genero"> Hembra</p>}
      {datos.sex === "M" && <p id="genero">Macho</p>}

      <label>Raza</label>
      <h3 id="raza">{datos.breed}</h3>

      <label>Año de nacimiento </label>
      <p id="edad">2{datos.birthDate}</p>

      <label>Descripcion</label>
      <p id="desc">{datos.description}</p>

      <label>Fecha de desaparicion</label>
      <p id="fechaPerd">{datos.disappearanceDate}</p>

      <label>Contacto</label>
      <p id="tlf">{datos.phone}</p>

      <label>Fecha de publicacion</label>
      <p id="fechaPubl">{datos.publishDate}</p>

      <label>Recompensa</label>
      <p id="rew">{datos.reward}</p>
    </section>
  );
}
