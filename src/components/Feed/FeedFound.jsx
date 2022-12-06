import { useState, useEffect } from "react";
import { getAllPets, getAllFoundPets } from "../../services/mascotas";
import Post from "../Post/Post";
import BusquedaAvanzada from "../BusquedaAvanzada/BusquedaAvanzada";
import "./Feed.css";
import { getFoundFilteredPets } from "../../services/mascotas";
const FeedFound = ({ lost }) => {
  const busquedaInicial = {
    species: "",
    breed: "",
    town: "",
    order: "distance",
    lat: 0,
    lang: 0,
  };
  const mascotaPruebaFound = {
    species: "Perro",
    sex: "H",
    breed: "Pastor catalan",
    desciption: "Perrita muy cariñosa",
    phone: "666 666 666",
    publishDate: new Date(),
    birthDate: "2015",
    foundDate: "2020-07-10",
    address: "Valencia",
  };

  const estadoIncial = [];
  estadoIncial.push(mascotaPruebaFound);
  const [posts, setPosts] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [busqueda, setBusqueda] = useState(busquedaInicial);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((posicion) => {
      let estadoAux = busqueda;
      estadoAux.lat = posicion.coords.latitude;
      estadoAux.lang = posicion.coords.longitude;
      console.log(estadoAux);
      setBusqueda(estadoAux);
      getFoundFilteredPets(busqueda)
        .then(async (response) => {
          const data = await response.json();
          if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
          setPosts(data);
          setFilteredPets(data);
        })
        .catch((error) => {
          this.setPosts({ errorMessage: error.toString });
          console.error("Hay un error", error);
        });
    });
  }, []);
  return (
    <>
      <section id="feedFound">
        <BusquedaAvanzada
          posts={posts}
          setFilteredPets={setFilteredPets}
          feedLost={lost}
        ></BusquedaAvanzada>
        <div className="contenedor-posts">
          {filteredPets.map((post, index) => (
            <Post key={post.id} mascota={post} lost={lost} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FeedFound;
