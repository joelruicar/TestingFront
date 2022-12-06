export default function DatosMascota({ datos }) {
  return (
    <section className="contenedor-datos-mascota">
      <h1 className="titulo-datos1">Datos de la mascota</h1>

      <label>Nombre</label>
      <h1 id="nombre1" data-testid="nombre1">
        {datos.name}
      </h1>

      <label>Especie</label>
      <h3 id="especie1">{datos.species}</h3>

      <label>Sexo</label>
      <p id="genero1"> Hembra</p>

      <label>Raza</label>
      <h3 id="raza1">{datos.breed}</h3>

      <label>Año de nacimiento </label>
      <p id="edad1">2{datos.birthDate}</p>

      <label>Descripcion</label>
      <p id="desc1">{datos.description}</p>

      <label>Fecha de desaparicion</label>
      <p id="fechaPerd1">{datos.disappearanceDate}</p>

      <label>Contacto</label>
      <p id="tlf1">{datos.phone}</p>

      <label>Fecha de publicacion</label>
      <p id="fechaPubl1">{datos.publishDate}</p>

      <label>Recompensa</label>
      <p id="rew1">{datos.reward}</p>
    </section>
  );
}
