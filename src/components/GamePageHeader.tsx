import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { useAppDispatch } from "../store/hooks";
import { toggleModal } from "../store/modal-slice";

const GamePageHeader = () => {
  const dispatch = useAppDispatch();

  const menuHandler = () => {
    dispatch(toggleModal("gameMenu"));
  };
  const restartHandler = () => {};
  return (
    <section className="flex justify-between md:max-w-screen-sm items-center p-3 gap-6 md:w-full">
      <button
        className="bg-dark-purple uppercase text-white px-4 py-2 font-bold rounded-full hover:bg-red"
        onClick={menuHandler}
      >
        Menu
      </button>
      <Logo />
      <button
        className="bg-dark-purple uppercase text-white px-4 py-2 font-bold rounded-full hover:bg-red"
        onClick={restartHandler}
      >
        Restart
      </button>
    </section>
  );
};

export default GamePageHeader;
