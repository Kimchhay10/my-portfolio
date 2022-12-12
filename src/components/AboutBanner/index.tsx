import { Spacer } from "@nextui-org/react";
import React from "react";
import Icon from "../Icon";

interface AboutBannerProps {
  items: any[];
  headTitle: string
}

const AboutBanner: React.FC<AboutBannerProps> = ({ items, headTitle }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-primary text-[32px]">{headTitle}</h1>
      <Spacer y={1} />
      <div className="bg-default w-full h-auto p-10 rounded-[16px] drop-shadow-sm shadow-md">
        <div className="flex flex-col w-full grid-cols-1 items-center justify-center">
          <div className="flex flex-col space-y-[32px]">
            {items?.map((item, index) => (
              <div key={index}>
                <ItemBanner
                  icon={
                    <Icon icon="check-circle-Bold" size={30} color="#606979" />
                  }
                  title={item?.title}
                  description={item?.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
interface ItemBannerProps {
  icon?: React.ReactElement;
  title: string;
  description: string;
}
const ItemBanner: React.FC<ItemBannerProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-center space-x-8">
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="font-semibold">{title}</span>
        <span className="text-gray-700 pt-2">{description}</span>
      </div>
    </div>
  );
};
export default AboutBanner;
