/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/no-node-access */
import VisualizadorMascota from "./components/VisualizadorMascota.jsx";
import { render } from "@testing-library/react";

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
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<VisualizadorMascota />);
  });

  test("2029 - Carga de datos formulario", () => {
    nombre = document.getElementById("nombre").innerHTML;
    species = document.getElementById("especie").innerHTML;
    breed = document.getElementById("especie").innerHTML;
    sex = document.getElementById("genero").innerHTML;
    breed = document.getElementById("raza").innerHTML;
    age = document.getElementById("edad").innerHTML;
    description = document.getElementById("desc").innerHTML;
    phone = document.getElementById("tlf").innerHTML;
    disappearanceDate = document.getElementById("fechaPerd").innerHTML;
    reward = document.getElementById("rew").innerHTML;
    publishDate = document.getElementById("fechaPubl").innerHTML;
    photos = document.getElementById("fotos").src;
    console.log(photos, "fotos");

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

  test("1136 - Sexo de las mascotas", () => {
    sex = document.getElementById("genero").innerHTML;
    if (sex === "Macho" || sex === "Hembra") {
      expect("a").toBe("a");
    } else {
      expect("a").toBe("b");
    }
  });
});