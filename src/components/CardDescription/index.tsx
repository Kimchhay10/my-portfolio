import { title } from "process";
import React from "react";
import Icon from "../Icon";

interface CardDescriptionProps {
  title: string
  description: string
  icon?: React.ReactElement
}

const CardDescription: React.FC<CardDescriptionProps> = ({title, description, icon}) => {
  return (
    <div className="flex flex-col w-auto h-auto p-2 border-2 border-primary shadow-sm drop-shadow-md">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-[24px]">{title}</span>
          {icon && <div className="flex">{icon}</div>}
        </div>

      <span
        className="text-[16px] text-gray-500 overflow-scroll"
        dangerouslySetInnerHTML={{ __html: description }}
      ></span>
    </div>
  );
};

export default CardDescription;
