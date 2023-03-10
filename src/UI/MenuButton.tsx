import React from "react";

type PropType = {
  label: string;
  color: string;
  image?: string;
  onButtonClick: () => void;
};
type Dict = { [key: string]: string };

const MenuButton: React.FC<PropType> = ({
  color,
  label,
  image,
  onButtonClick,
}) => {
  const colorVariants: Dict = {
    red: "bg-red text-white",
    yellow: "bg-yellow",
    white: "bg-white",
  };

  const onClickHandler = () => {
    onButtonClick();
  };

  return (
    <button
      className={`border-2 border-gray-900 justify-between w-full flex items-center text-2xl
      rounded-full ${colorVariants[color]} px-5 py-3 uppercase font-bold shadow-md shadow-black hover:shadow-dark-purple`}
      onClick={onClickHandler}
    >
      {label}
      {image && <img src={require(`../assets/images/${image}.svg`)} alt="" />}
    </button>
  );
};

export default MenuButton;
