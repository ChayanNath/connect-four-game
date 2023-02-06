import React from "react";
import { selectWinner } from "../store/game-slice";
import { useAppSelector } from "../store/hooks";
import Timer from "./Timer";
import Winner from "./Winner";

const GameInfo = () => {
  const winner = useAppSelector(selectWinner);

  return <div>{winner ? <Winner /> : <Timer />}</div>;
};

export default GameInfo;
