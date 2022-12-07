/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Feed from "./components/Feed/Feed";
import Post from "./components/Post/Post";

describe("Feed component", () => {
  let nombre;
  let fechaDesaparicion;
  let img;
  beforeEach(() => {
    render(<Feed />);
  });

  it("1362 - Carga posts en el feed", () => {
    nombre = screen.findByTitle("nombre1").innerHTML;
    fechaDesaparicion = screen.findByTitle("fechaDesaparicion").innerHTML;
    img = screen.findByTitle("img1").src;

    expect(nombre).toBe("Lulu");
    expect(fechaDesaparicion).toBe("2022-12-01T13:45:00Z");
    expect(img).toBe(
      "http://127.0.0.1:8000/media/api/posts/114/pictures/IMG-20200114-WA0022.jpg"
    );
  });
});
