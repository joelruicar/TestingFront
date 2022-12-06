import VisualizadorMascota from "./components2/VisualizadorMascota";
import Feed from "./components/Feed/Feed";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/FeedLostPets" element={<Feed lost={true}></Feed>}></Route>
        <Route
          path="/mascotas/lost/:id"
          element={<VisualizadorMascota></VisualizadorMascota>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
