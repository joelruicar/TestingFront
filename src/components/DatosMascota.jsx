export default function DatosMascota({ datos }) {
  return (
    <section className="contenedor-datos-mascota">
      <h1 className="titulo-datos">Datos de la mascota</h1>
      <label title="nombre mascota">Nombre</label>
      <h1 id="mascotita" title="asdasds">
        Lulu
      </h1>
      <label>Especie</label>
      <h3>{datos.species}</h3>

      <label>Sexo</label>
      {datos.sex === "H" && <p>Hembra</p>}
      {datos.sex === "M" && <p>Macho</p>}
      {datos.sex === "O" && <p>Otro</p>}

      <label>Raza</label>
      <h3>{datos.breed}</h3>

      <label>Año de nacimiento </label>
      {datos.birthDate === undefined ? (
        <p>{datos.birthDate}</p>
      ) : (
        <p>{datos.birthDate.substring(0, 4)}</p>
      )}

      <label>Descripcion</label>
      <p>{datos.description}</p>

      <label>Fecha de desaparicion</label>
      {datos.disappearanceDate === undefined ? (
        <p>{datos.disappearanceDate}</p>
      ) : (
        <p>{datos.disappearanceDate.substring(0, 10)}</p>
      )}

      <label>Contacto</label>
      <p>{datos.phone}</p>

      <label>Fecha de publicacion</label>
      {datos.publishDate === undefined ? (
        <p>{datos.publishDate}</p>
      ) : (
        <p>{datos.publishDate.substring(0, 10)}</p>
      )}

      <label>Recompensa</label>
      <p>{datos.reward}</p>
    </section>
  );
}
