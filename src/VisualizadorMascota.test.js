/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom/extend-expect";

describe("VisualizadorMascota component", () => {
  let nombre;
  let species;
  let breed;
  let sex;
  let age;
  let description;
  let phone;
  let reward;
  let disappearanceDate;
  let publishDate;
  let photos;
  beforeEach(() => {});

  it("2029 - Carga de datos formulario", async () => {
    setTimeout(() => {
      nombre = document.getElementById("nombre1");
      console.log(nombre, "este es el nombre");
      species = document.getElementById("especie1").innerHTML;

      sex = document.getElementById("genero1").innerHTML;
      breed = document.getElementById("raza1").innerHTML;
      age = document.getElementById("edad1").innerHTML;
      description = document.getElementById("desc1").innerHTML;
      phone = document.getElementById("tlf1").innerHTML;
      disappearanceDate = document.getElementById("fechaPerd1").innerHTML;
      reward = document.getElementById("rew1").innerHTML;
      publishDate = document.getElementById("fechaPubl1").innerHTML;
      photos = document.getElementById("fotos1").src;

      expect(nombre).toBe("Lulu");
      expect(species).toBe("Gato");
      expect(sex).toBe("Hembra");
      expect(breed).toBe("Pixie bob");
      expect(age).toBe("2016");
      expect(phone).toBe("123456789");
      expect(disappearanceDate).toBe("2022-12-01T13:45:00Z");
      expect(description).toBe("Se ha perdido");
      expect(reward).toBe("Un gritón de dolares");
      expect(publishDate).toBe("2022-12-03T16:31:44.984551Z");
      expect(photos).toBe(
        "http://127.0.0.1:8000/media/api/posts/114/pictures/IMG-20200114-WA0022.jpg"
      );
    });
  }, 5000);
});
