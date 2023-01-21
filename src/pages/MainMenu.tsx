import React from "react";
import Layout from "../UI/Layout";

import { ReactComponent as Logo } from "../assets/images/logo.svg";
import MenuButton from "../UI/MenuButton";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();

  const gameRulesHandler = () => {
    navigate("/rules");
  };

  const CPUvHandler = () => {};

  const PVPHandler = () => {};

  return (
    <Layout>
      <Card>
        <>
          <Logo />
          <div className="grid gap-4 grid-rows-3 w-full">
            <MenuButton
              label="Player vs Cpu"
              color="red"
              image="player-vs-cpu"
              onButtonClick={CPUvHandler}
            />
            <MenuButton
              label="Player vs Player"
              color="yellow"
              image="player-vs-player"
              onButtonClick={PVPHandler}
            />
            <MenuButton
              label="Game rules"
              color="white"
              onButtonClick={gameRulesHandler}
            />
          </div>
        </>
      </Card>
    </Layout>
  );
};

export default MainMenu;
