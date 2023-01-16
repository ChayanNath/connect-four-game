import React from "react";
import Layout from "../UI/Layout";

import { ReactComponent as Logo } from "../assets/images/logo.svg";
import MenuButton from "../UI/MenuButton";

const MainMenu = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center h-full">
        <div className="border-gray-900 rounded-lg p-6 max-w-lg flex items-center justify-between flex-col gap-4 w-full md:border-2 md:shadow-md md:shadow-black">
          <Logo />
          <div className="flex flex-col gap-4 w-full">
            <MenuButton
              label="Player vs Cpu"
              color="red"
              image="player-vs-cpu"
            />
            <MenuButton
              label="Player vs Player"
              color="yellow"
              image="player-vs-player"
            />
            <MenuButton label="Game rules" color="white" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainMenu;
