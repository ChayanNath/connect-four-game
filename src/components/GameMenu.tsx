import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import Card from "../UI/Card";
import MenuButton from "../UI/MenuButton";
import { setModal, toggleModal } from "../store/modal-slice";

const GameMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const continueGameHandler = () => {
    dispatch(toggleModal("gameMenu"));
  };

  const quitGameHandler = () => {
    navigate("/");
    dispatch(setModal({ modal: "gameMenu", status: false }));
  };
  const restartGameHandler = () => {
    dispatch(toggleModal("gameMenu"));
  };

  return (
    <Card className="bg-purple">
      <>
        <h1 className="text-white text-5xl font-bold">PAUSE</h1>
        <MenuButton
          label="continue game"
          color="white"
          onButtonClick={continueGameHandler}
        ></MenuButton>
        <MenuButton
          label="restart"
          color="white"
          onButtonClick={restartGameHandler}
        ></MenuButton>
        <MenuButton
          label="quit game"
          color="red"
          onButtonClick={quitGameHandler}
        ></MenuButton>
      </>
    </Card>
  );
};

export default GameMenu;
