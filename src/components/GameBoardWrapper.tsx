import React from "react";
import Board from "./Board";
import GameInfo from "./GameInfo";
import PlayerInfo from "./PlayerInfo";

const GameBoardWrapper = () => {
  return (
    <div className="game-board-wrapper">
      <div className="player-1 self-center">
        <PlayerInfo player={`player1`} />
      </div>
      <div className="board relative">
        <Board />
      </div>
      <div className="player-2 self-center">
        <PlayerInfo player={`player2`} />
      </div>
      <div className="game-info">
        <GameInfo />
      </div>
    </div>
  );
};

export default GameBoardWrapper;
