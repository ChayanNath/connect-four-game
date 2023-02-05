import React from "react";
import { useSelector } from "react-redux";
import { playAgain } from "../store/game-slice";
import { useAppDispatch } from "../store/hooks";
import { RootState } from "../store/store";

const Winner = () => {
  const dispatch = useAppDispatch();
  const game = useSelector((state: RootState) => state.game);

  let name = "You";
  let status = "tie";

  if (game.winner && game.winner !== "tie") {
    name = game[game.winner].name;
    status = name === "You" ? "win" : "wins";
  }

  const playAgainHandler = () => {
    dispatch(playAgain());
  };

  return (
    <div className="w-56 h-32 border-black border-2 bg-white rounded-3xl flex flex-col justify-center items-center shadow-black">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-4xl uppercase font-bold">{status}</div>
      <button
        className="rounded-full border-black border-2 px-3 py-2 bg-purple text-white uppercase"
        onClick={playAgainHandler}
      >
        Play Again
      </button>
    </div>
  );
};

export default Winner;
