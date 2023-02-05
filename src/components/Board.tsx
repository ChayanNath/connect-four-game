import React from "react";

import { ReactComponent as WhiteLayoutLarge } from "../assets/images/board-layer-white-large.svg";
import { ReactComponent as BlackLayoutLarge } from "../assets/images/board-layer-black-large.svg";
import { ReactComponent as WhiteLayoutSmall } from "../assets/images/board-layer-white-small.svg";
import { ReactComponent as BlackLayoutSmall } from "../assets/images/board-layer-white-small.svg";
import ControlGrid from "./ControlGrid";
import CounterGrid from "./CounterGrid";

const Board = () => {
  return (
    <>
      <div className="md:hidden">
        <WhiteLayoutSmall className="absolute" style={{ zIndex: 4 }} />
        <BlackLayoutSmall />
      </div>
      <ControlGrid />
      <CounterGrid />
      <div className="hidden md:block">
        <WhiteLayoutLarge className="absolute" style={{ zIndex: 4 }} />
        <BlackLayoutLarge />
      </div>
    </>
  );
};

export default Board;
