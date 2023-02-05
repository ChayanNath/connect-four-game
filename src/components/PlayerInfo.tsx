import React from "react";

import { ReactComponent as YouIcon } from "../assets/images/you.svg";
import { ReactComponent as CPUIcon } from "../assets/images/cpu.svg";
import { ReactComponent as Player1 } from "../assets/images/player-one.svg";
import { ReactComponent as Player2 } from "../assets/images/player-two.svg";
import { useAppSelector } from "../store/hooks";

type icons = {
  [key: string]: React.FunctionComponent;
};

const iconsPVP: icons = {
  player1: Player1,
  player2: Player2,
};

const iconsPVCPU: icons = {
  player1: YouIcon,
  player2: CPUIcon,
};

const PlayerInfo: React.FC<{ player: string }> = ({ player }) => {
  const gameMode = "PvP";
  const PlayerIcon = gameMode === "PvP" ? iconsPVP[player] : iconsPVCPU[player];

  return (
    <div className="bg-white rounded-3xl flex border-4 border-black relative justify-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="text-2xl leading-5 flex md:gap-5 gap-3 flex-row xl:flex-col items-center top-6 md:p-8 p-3">
        <div className="uppercase font-semibold text-2xl">You</div>
        <div className="font-bold md:text-6xl text-2xl">51</div>
      </div>
      <div
        className={`absolute md:-mt-8 md:left-1/2 -translate-x-1/2 ${
          player === "player1" ? "-left-8" : "-right-8"
        }`}
      >
        <PlayerIcon />
      </div>
    </div>
  );
};

export default PlayerInfo;
