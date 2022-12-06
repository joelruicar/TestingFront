import { useState, useEffect } from "react";
import { getAllLostPets } from "../../services/mascotas";
import Post from "../Post/Post";
import "./Feed.css";

const Feed = ({}) => {
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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllLostPets()
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        setPosts(data);
      })
      .catch((error) => {
        this.setPosts({ errorMessage: error.toString });
        console.error("Hay un error", error);
      });
  }, []);

  return (
    <>
      <section id="feed">
        <div className="contenedor-posts">
          {posts != null ? (
            posts.map((post, index) => <Post key={post.id} mascota={post} />)
          ) : (
            <Post></Post>
          )}
        </div>
      </section>
    </>
  );
};

export default Feed;
