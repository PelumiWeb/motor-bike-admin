import React from "react";
function CustomButton({
  name,
  disabled,
  width,
  iconLeft,
  bg = "bg-primary",
  textColor = "text-white",
  borderColor,
  ml,
  onClick,
}: {
  name: string;
  disabled?: boolean;
  width?: string;
  iconLeft?: any;
  bg?: string;
  textColor?: string;
  borderColor?: string;
  ml?:string;
  onClick?: () => void;
}) {
  return (
    <button
    onClick={onClick}
      disabled={disabled}
      className={`${
        width ? width : "w-full"
      } my-8 ${bg} rounded-full ${textColor} py-4 disabled:bg-gray200 disabled:text-gray100 cursor-pointer flex justify-center items-center ${
        borderColor && borderColor
      } ${ml && ml}`}>
      {iconLeft && <img src={iconLeft} className="w-[16px] mr-4" />}
      <p>{name}</p>
    </button>
  );
}

export default CustomButton;
