import { LinkProps } from "next/link";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Icon from "../Icon";
import useSideBar from "../../hooks/system/useSideBar";
import { EPages } from "../../configs/enum";
import {motion} from 'framer-motion'
import { useTranslation } from "react-i18next";
interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const router = useRouter();
  const { isClickBar, setClickBar } = useSideBar();
  const {t} = useTranslation('common')
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
          title={t("bar.home")}
          href={EPages.HOME}
          isActive={router.asPath === EPages.HOME}
        />
        <NavItem
          title={t("bar.projects")}
          href={EPages.PROJECT}
          isActive={router.asPath === EPages.PROJECT}
        />
        <NavItem
          title={t("bar.work")}
          href={EPages.WORK}
          isActive={router.asPath === EPages.WORK}
        />
        <NavItem
          title={t("bar.services")}
          href={EPages.SERVICES}
          isActive={router.asPath === EPages.SERVICES}
        />
        <NavItem
          title={t("bar.about")}
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
