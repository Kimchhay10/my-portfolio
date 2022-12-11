import { motion } from "framer-motion";
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
      <div className="flex items-center space-x-2 justify-between">
        <span className="font-bold text-[24px] text-black">{title}</span>
        {icon && <div className="flex">{icon}</div>}
        <Icon icon="check-circle-Filled" size={20} color={"#FF481B"} />
      </div>

      <span
        className="text-[16px] text-gray-500"
        dangerouslySetInnerHTML={{ __html: description }}
      ></span>
    </div>
  );
};

export default CardDescription;
