import React from "react";
import GameBoard from "../components/GameBoard";
import GamePageHeader from "../components/GamePageHeader";
import Layout from "../UI/Layout";

const Game: React.FC = () => {
  return (
    <>
      <Layout>
        <div className="container-lg mx-auto p-5">
          <GamePageHeader />
          <GameBoard />
        </div>
      </Layout>
    </>
  );
};

export default Game;
