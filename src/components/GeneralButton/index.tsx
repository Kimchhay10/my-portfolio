import React, { ButtonHTMLAttributes } from "react";
import Icon from "../Icon";

interface GeneralButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
  isBack?: boolean;
}

const GeneralButton: React.FC<GeneralButtonProps> = ({
  buttonType,
  title,
  isBack,
  ...rest
}) => {
  return isBack ? (
    <button
      type={buttonType}
      {...rest}
      className="flex w-full h-[45px] rounded-full border-2 shadow-sm cursor-pointer items-center justify-center hover:bg-gray-100 duration-500"
    >
      <div className="flex items-center justify-center space-x-2">
        <Icon icon="chevron-circle-left-Bold" size={20} />
        <p className="text-center font-medium text-black">{title}</p>
      </div>
    </button>
  ) : (
    <button
      {...rest}
      type={buttonType}
      className={`flex w-full h-[45px] rounded-full bg-primary shadow-sm cursor-pointer items-center justify-center hover:bg-opacity-90 ${
        rest?.className ?? ""
      }`}
    >
      <span className="text-center font-semibold text-white px-2">{title}</span>
    </button>
  );
};

export default GeneralButton;
