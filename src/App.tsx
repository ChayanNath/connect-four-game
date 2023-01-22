import { Route, Routes } from "react-router-dom";
import DifficultyMenu from "./components/DifficultyMenu";
import GameMenu from "./components/GameMenu";
import Game from "./pages/Game";
import MainMenu from "./pages/MainMenu";
import Rules from "./pages/Rules";
import { useAppSelector } from "./store/hooks";
import { selectIsModalOpened } from "./store/modal-slice";
import Modal from "./UI/Modal";

function App() {
  const isOpenModal = useAppSelector(selectIsModalOpened);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainMenu />}></Route>
        <Route path="/rules" element={<Rules />}></Route>
        <Route path="/game" element={<Game />}></Route>
      </Routes>
      {isOpenModal.gameMenu && (
        <Modal key="gameMenuModal">
          <GameMenu />
        </Modal>
      )}
      {isOpenModal.mainMenu && (
        <Modal key="mainMenuModal">
          <DifficultyMenu />
        </Modal>
      )}
    </>
  );
}

export default App;
