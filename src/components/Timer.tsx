import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TurnRed from "../assets/images/turn-background-red.svg";
import TurnYellow from "../assets/images/turn-background-yellow.svg";
import {
  changeTurn,
  selectCurrentPlayer,
  selectIsGamePaused,
  selectTimer,
  selectTurn,
  updateTimer,
} from "../store/game-slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";

const bgs: { [key: string]: string } = {
  red: TurnRed,
  yellow: TurnYellow,
};

const textColor: { [key: string]: string } = {
  red: "var(--color-white)",
  yellow: "var(--color-black)",
};

const Timer: React.FC = () => {
  const game = useSelector((state: RootState) => state.game);
  const turn = useAppSelector(selectTurn);
  const timer = useAppSelector(selectTimer);
  const isGamePaused = useAppSelector(selectIsGamePaused);
  const currentPlayer = useAppSelector(selectCurrentPlayer);

  const dispatch = useAppDispatch();

  const player =
    game[currentPlayer].name === "You"
      ? "your"
      : `${game[currentPlayer].name}'s`;

  useEffect(() => {
    if (isGamePaused) return;
    const timeout = setTimeout(() => {
      const newTime = timer - 1;
      dispatch(updateTimer(newTime));
    }, 1000);

    if (timer <= 0) {
      dispatch(changeTurn());
    }

    return () => clearTimeout(timeout);
  }, [dispatch, timer, isGamePaused]);
  return (
    <div className="bg-transparent w-40 h-28 bg-no-repeat bg-cover flex flex-col items-center justify-center">
      <div className="text-2xl uppercase mt-4">{player} turn</div>
      <div className="text-xl">{timer}s</div>
    </div>
  );
};

export default Timer;
