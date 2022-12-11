import { LinkProps } from "next/link";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Icon from "../Icon";
import useSideBar from "../../hooks/system/useSideBar";
import { EPages } from "../../configs/enum";
import {motion} from 'framer-motion'
interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const router = useRouter();
  const { isClickBar, setClickBar } = useSideBar();

  return (
   
      <div className="flex lg:hidden w-full h-full fixed z-40 left-0 right-0 bg-white ">
        <div className="py-2" onClick={() => setClickBar(!isClickBar)}>
          <Icon
            icon="times-square-Bold"
            size={20}
            className="absolute flex lg:hidden cursor-pointer right-[20px] top-[30px]"
          />
        </div>
        <div className="flex flex-col items-center mx-auto space-y-6 mt-[24px] text-black">
          <NavItem
            title="Home"
            href={EPages.HOME}
            isActive={router.asPath === EPages.HOME}
          />
          <NavItem
            title="Work"
            href={EPages.WORK}
            isActive={router.asPath === EPages.WORK}
          />
          <NavItem
            title="Services"
            href={EPages.SERVICES}
            isActive={router.asPath === EPages.SERVICES}
          />
          <NavItem
            title="About"
            href={EPages.ABOUT}
            isActive={router.asPath === EPages.ABOUT}
          />
        </div>
      </div>
  );
};
interface NavItemProps extends LinkProps {
  title: string;
  href: string;
  isActive: boolean;
}
const NavItem = ({ title, href, isActive, ...rest }: NavItemProps) => {
  const { isClickBar, setClickBar } = useSideBar();

  return (
    <div>
      <NextLink href={href} {...rest} onClick={() => setClickBar(!isClickBar)}>
          <span
            className={`${
              isActive ? "text-primary" : "text-gray-400"
            } font-semibold cursor-pointer duration-300 rounded-[6px] hover:text-primary text-[24px]`}
          >
            {title}
          </span>
      </NextLink>
    </div>
  );
};

export default SideBar;
