import VisualizadorMascota from "./components/VisualizadorMascota.jsx";
import { getPetByID } from "./services/mascotas";
import { render, screen } from "@testing-library/react";

describe("VisualizadorMascota component", () => {
  const mockLocation = {
    pathname: "/",
    hash: "",
    search: "",
    state: "",
  };
  let nombre;
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<VisualizadorMascota />);
  });

  // test("Carga de datos formulario", () => {});

  test("the data is peanut butter", () => {
    // eslint-disable-next-line testing-library/no-node-access
    nombre = document.getElementById("mascotita").innerHTML;
    console.log(nombre);
    expect(nombre).toBe("Lulu");
  });

  // test("Sexo de las mascotas", () => {
  //   expect(2 + 2).toBe(4);
  // });
});
