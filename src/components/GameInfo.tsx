import React from "react";
import { useAppSelector } from "../store/hooks";
import Timer from "./Timer";
import Winner from "./Winner";

const GameInfo = () => {
  const winner = true; //useAppSelector(selectWinner);

  return <div>{winner ? <Winner /> : <Timer />}</div>;
};

export default GameInfo;
