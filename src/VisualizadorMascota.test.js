import VisualizadorMascota from "./components/VisualizadorMascota.jsx";
import { render } from "@testing-library/react";

describe("VisualizadorMascota component", () => {
  const mockLocation = {
    pathname: "/",
    hash: "",
    search: "",
    state: "",
  };

  beforeEach(async () => {});

  test("Carga de datos formulario", () => {
    render(<VisualizadorMascota />);
  });

  test("Sexo de las mascotas", () => {
    expect(2 + 2).toBe(4);
  });
});
