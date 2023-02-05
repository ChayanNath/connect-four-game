import React from "react";
import { selectGameBoard, selectWinnigCombination } from "../store/game-slice";
import { useAppSelector } from "../store/hooks";
import CounterRedLarge from "../assets/images/counter-red-large.svg";
import CounterYellowLarge from "../assets/images/counter-yellow-large.svg";
import CounterRedSmall from "../assets/images/counter-red-small.svg";
import CounterYellowSmall from "../assets/images/counter-yellow-small.svg";
import Counter from "./Counter";

type countersType = {
  [key: string]: {
    [key: string]: string;
  };
};

const counters: countersType = {
  red: {
    large: CounterRedLarge,
    small: CounterRedSmall,
  },
  yellow: {
    large: CounterYellowLarge,
    small: CounterYellowSmall,
  },
};

const CounterGrid = () => {
  const gameGrid = useAppSelector(selectGameBoard);
  const winningCombination = useAppSelector(selectWinnigCombination);

  const size = window.innerWidth > 760 ? "large" : "small";

  return (
    <div
      className="grid grid-cols-7 grid-rows-6 absolute  inset-0 pb-6 md:pb-14 md:pt-3"
      style={{
        gap: "0.3rem",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        paddingTop: "0.4rem",
        zIndex: 3,
      }}
    >
      {gameGrid.map((row, i) =>
        row.map((counter, j) => (
          <div className="md:w-20 md:h-20 w-12 h-12" key={`${i}${j}`}>
            {counter && (
              <Counter
                bg={counter && counters[counter][size]}
                isWin={winningCombination[`${i}${j}`]}
                row={i}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default CounterGrid;
