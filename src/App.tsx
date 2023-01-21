import { Route, Routes } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import Rules from "./pages/Rules";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />}></Route>
      <Route path="/rules" element={<Rules />}></Route>
    </Routes>
  );
}

export default App;
