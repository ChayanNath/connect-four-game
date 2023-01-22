import React from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../store/modal-slice";
import Card from "../UI/Card";

const DifficultyMenu = () => {
  const dispatch = useDispatch();

  const selectDifficultyHandler = () => {
    dispatch(setModal({ modal: "mainMenu", status: false }));
  };

  return (
    <Card className="bg-purple">
      <>
        <h1 className="text-white text-3xl font-bold uppercase">
          Select Difficulty
        </h1>
        <div className="flex flex-col gap-3 text-xl">
          <button
            className="text-slate-300 uppercase  font-semibold hover:text-white"
            onClick={selectDifficultyHandler}
          >
            Easy
          </button>
          <button
            className="text-slate-300 uppercase  font-semibold hover:text-yellow"
            onClick={selectDifficultyHandler}
          >
            Medium
          </button>
          <button
            className="text-slate-300 uppercase  font-semibold hover:text-red"
            onClick={selectDifficultyHandler}
          >
            Hard
          </button>
        </div>
      </>
    </Card>
  );
};

export default DifficultyMenu;
