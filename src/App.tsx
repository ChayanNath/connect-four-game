import { Route, Routes } from "react-router-dom";
import MainMenu from "./pages/MainMenu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />}></Route>
    </Routes>
  );
}

export default App;
