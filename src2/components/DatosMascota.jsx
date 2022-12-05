export default function DatosMascota({ datos }) {
  return (
    <section className="contenedor-datos-mascota">
      <h1 className="titulo-datos">Datos de la mascota</h1>

      <label title="nombre mascota">Nombre</label>
      <h1 id="nombre">Lulu</h1>

      <label>Especie</label>
      <h3 id="especie">Gato</h3>

      <label>Sexo</label>
      <p id="genero">Hembra</p>

      <label>Raza</label>
      <h3 id="raza">Pixie bob</h3>

      <label>Año de nacimiento </label>

      <p id="edad">2016</p>

      <label>Descripcion</label>
      <p id="desc">Se ha perdido</p>

      <label>Fecha de desaparicion</label>

      <p>{datos.disappearanceDate}</p>
      <p id="fechaPerd">2022-12-01T13:45:00Z</p>

      <label>Contacto</label>
      <p id="tlf">123456789</p>

      <label>Fecha de publicacion</label>
      <p id="fechaPubl">2022-12-03T16:31:44.984551Z</p>

      <label>Recompensa</label>
      <p id="rew">Un gritón de dolares</p>
    </section>
  );
}
