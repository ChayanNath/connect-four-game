import React from "react";

type PropType = {
  label: string;
  color: string;
  image?: string;
};
type Dict = { [key: string]: string };

const MenuButton: React.FC<PropType> = ({ color, label, image }) => {
  const colorVariants: Dict = {
    red: "bg-red text-white",
    yellow: "bg-yellow",
    white: "bg-white",
  };

  return (
    <button
      className={`border-2 border-gray-900 justify-between w-full flex items-center text-2xl flex-1 h-28
          rounded-lg ${colorVariants[color]} p-3 uppercase font-bold shadow-md shadow-black hover:shadow-dark-purple`}
    >
      {label}
      {image && <img src={require(`../assets/images/${image}.svg`)} alt="" />}
    </button>
  );
};

export default MenuButton;
