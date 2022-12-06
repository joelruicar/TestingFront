import VisualizadorMascota from "./components2/VisualizadorMascota";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/mascotas/lost/:id"
          element={<VisualizadorMascota></VisualizadorMascota>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
