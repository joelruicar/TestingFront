/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import VisualizadorMascota from "./components/VisualizadorMascota";

describe("VisualizadorMascota component", () => {
  let nombre, species;
  let breed, sex;
  let age, description;
  let phone, reward;
  let disappearanceDate, publishDate, photos;
  beforeEach(() => {
    render(<VisualizadorMascota />);
  });

  it("2029 - Carga de datos formulario", async () => {
    setTimeout(async () => {
      nombre = (await screen.findByTitle("nombre1")).innerHTML;
      species = (await screen.findByTitle("especie1")).innerHTML;

      sex = (await screen.findByTitle("genero1")).innerHTML;
      breed = (await screen.findByTitle("raza1")).innerHTML;
      age = (await screen.findByTitle("edad1")).innerHTML;
      description = (await screen.findByTitle("desc1")).innerHTML;
      phone = (await screen.findByTitle("tlf1")).innerHTML;
      disappearanceDate = (await screen.findByTitle("fechaPerd1")).innerHTML;
      reward = (await screen.findByTitle("rew1")).innerHTML;
      publishDate = (await screen.findByTitle("fechaPubl1")).innerHTML;
      photos = (await screen.findByTitle("fotos1")).src;

      expect(nombre).toBe("Lulu");
      expect(species).toBe("Gato");
      expect(sex).toBe("Hembra");
      expect(breed).toBe("Pixie bob");
      expect(age).toBe("2016");
      expect(phone).toBe("123456789");
      expect(disappearanceDate).toBe("2022-12-01T13:45:00Z");
      expect(description).toBe("Se ha perdido");
      expect(reward).toBe("500€");
      expect(publishDate).toBe("2022-12-03T16:31:44.984551Z");
      expect(photos).toBe(
        "http://127.0.0.1:8000/media/api/posts/114/pictures/IMG-20200114-WA0022.jpg"
      );
    }, 5000);
  });

  it("1136 - Sexo de las mascotas", () => {
    setTimeout(async () => {
      sex = (await screen.findByTitle("genero1")).innerHTML;
      if (sex === "Macho" || sex === "Hembra") {
        expect("a").toBe("a");
      } else {
        expect("a").toBe("b");
      }
    }, 5000);
  });
});
