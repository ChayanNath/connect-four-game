import React from "react";
import GameBoardWrapper from "../components/GameBoardWrapper";
import GamePageHeader from "../components/GamePageHeader";
import Layout from "../UI/Layout";

const Game: React.FC = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center">
          <GamePageHeader />
          <GameBoardWrapper />
        </div>
      </Layout>
    </>
  );
};

export default Game;
