import React from "react";

const Counter: React.FC<{ bg: string; row: number; isWin: boolean }> = ({
  bg,
  row,
  isWin,
}) => {
  return (
    <div
      className="flex items-center justify-center w-full h-full ng-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {isWin && (
        <div className="w-12 h-12 border-2 rounded-full border-white"></div>
      )}
    </div>
  );
};

export default Counter;
