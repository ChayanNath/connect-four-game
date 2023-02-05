import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  makeMove,
  selectCurrentPlayer,
  selectGameMode,
  selectIsTimeForNextTurn,
  setPointercolumn,
} from "../store/game-slice";
import GamePointer from "./GamePointer";

const columns = Array(7).fill(null);

const ControlGrid: React.FC = () => {
  const nextTurn = useAppSelector(selectIsTimeForNextTurn);
  const gameMode = useAppSelector(selectGameMode);
  const currentPlayer = useAppSelector(selectCurrentPlayer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentPlayer === "p2" && gameMode === "CPUvP" && nextTurn) {
      //Ai Move will come here
    }
  }, [dispatch, nextTurn, currentPlayer, gameMode]);

  const mouseHoverHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    dispatch(
      setPointercolumn(
        event.currentTarget.getAttribute("data-columnnum") || "0"
      )
    );
  };

  const columnClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();

    console.log("Here");
    if (currentPlayer === "p2" && gameMode === "CPUvP") return;
    const col = event.currentTarget.getAttribute("data-columnnum");
    if (col) {
      dispatch(makeMove(+col));
    }
  };

  return (
    <div
      className="grid grid-cols-7 md:gap-7 h-full gap-2 md:px-5 px-2 absolute inset-0"
      style={{
        zIndex: 6,
      }}
    >
      {/* <GamePointer /> */}
      {columns.map((_, ind) => {
        return (
          <div
            className="w-9 md:w-16 cursor-pointer"
            key={ind}
            data-columnnum={ind}
            onMouseEnter={mouseHoverHandler}
            onClick={columnClickHandler}
          ></div>
        );
      })}
    </div>
  );
};

export default ControlGrid;
