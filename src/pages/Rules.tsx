import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../UI/Card";
import Layout from "../UI/Layout";

const Rules = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <Layout>
      <Card className="bg-white">
        <>
          <h1 className="uppercase text-center font-bold text-5xl">Rules</h1>
          <article>
            <h2 className="uppercase  text-purple text-lg font-bold">
              Objective
            </h2>
            <p>
              Be the first player to connect 4 of the same colored discs in a
              row (either vertically, horizontally, or diagonally).
            </p>
          </article>
          <article>
            <h2 className="uppercase  text-purple font-bold">How to play</h2>
            <ol>
              <li className="flex gap-2">
                <span className="font-medium">1</span>
                Red goes first in the first game.
              </li>
              <li className="flex gap-2">
                <span className="font-medium">2</span>
                Players must alternate turns, and only one disc can be dropped
                in each turn.
              </li>
              <li className="flex gap-2">
                <span className="font-medium">3</span>
                The game ends when there is a 4-in-a-row or a stalemate.
              </li>
              <li className="flex gap-2">
                <span className="font-medium">4</span>
                The starter of the previous game goes second on the next game.
              </li>
            </ol>
          </article>
          <button
            className="border-2 border-gray-900 rounded-full p-3 bg-red text-white font-medium shadow-md shadow-black hover:shadow-dark-purple"
            onClick={onClickHandler}
          >
            Got it!
          </button>
        </>
      </Card>
    </Layout>
  );
};

export default Rules;
