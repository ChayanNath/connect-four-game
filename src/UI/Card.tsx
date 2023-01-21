import React from "react";

const Card: React.FC<{ className?: string; children: JSX.Element }> = (
  props
) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div
        className={`border-gray-900 rounded-lg p-6 max-w-lg flex items-center justify-between flex-col gap-4 w-full md:border-2 md:shadow-md md:shadow-black ${props.className}`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Card;
