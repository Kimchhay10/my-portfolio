/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback } from "react";
import Link, { LinkProps } from "next/link";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { EPages } from "../../configs/enum";
import Icon from "../Icon";
import useSideBar from "../../hooks/system/useSideBar";
import ChangeLanguageDropDown from "../ChangeLanguageDropDown";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();
  const { isClickBar, setClickBar } = useSideBar();
  const handleClickMenu = useCallback(() => {
    setClickBar(!isClickBar)
  }, [])
  const {t} = useTranslation("common")
  return (
    <div className="relative container w-full h-[80px] flex">
      <div className="w-full flex items-center h-auto justify-between">
        <div className="flex items-center">
          <NextLink href={EPages.HOME}>
            <span className="font-bold text-[32px] cursor-pointer text-black">
              Chhay.
            </span>
          </NextLink>

          <div className="hidden lg:flex items-center mx-10 space-x-2"></div>
        </div>
        <div className="hidden sm:flex items-center space-x-12">
          <NavbarItem
            isActive={router.asPath === EPages.HOME}
            href={EPages.HOME}
            title={t("bar.home")}
          />
          <NavbarItem
            isActive={router.asPath === EPages.PROJECT}
            href={EPages.PROJECT}
            title={t("bar.projects")}
            icon={
              <Icon
                icon="chevron-circle-down-Bold"
                size={15}
                color="#FF481B"
              ></Icon>
            }
          />
          <NavbarItem
            isActive={router.asPath === EPages.WORK}
            href={EPages.WORK}
            title={t("bar.work")}
            icon={
              <Icon
                icon="chevron-circle-down-Bold"
                size={15}
                color="#FF481B"
              ></Icon>
            }
          />
          <NavbarItem
            isActive={router.asPath === EPages.SERVICES}
            href={EPages.SERVICES}
            title={t("bar.services")}
          />
          <NavbarItem
            isActive={router.asPath === EPages.ABOUT}
            href={EPages.ABOUT}
            title={t("bar.about")}
          />
        </div>
        <div className="hidden lg:flex items-center space-x-[16px] px-4 text-[14px]">
          <div className="flex items-center space-x-0">
            <Link
              href={EPages.CONTACT}
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-primary rounded-[2px] shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">
                Contact Me
              </span>
              <span className="relative invisible">Button Text</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ChangeLanguageDropDown />
          <button
            className="flex sm:hidden font-bold"
            onClick={handleClickMenu}
          >
            <Icon icon="hamburger-menu" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

interface ItemProps extends LinkProps {
  title: string;
  isActive?: boolean;
  icon?: React.ReactElement;
}
const NavbarItem = ({ title, isActive, icon, ...rest }: ItemProps) => {
  return (
    <NextLink {...rest}>
      <button
        className={`flex w-auto items-center justify-center text-black ${
          isActive ? "font-semibold" : "font-medium"
        }`}
      >
        <span>{title}</span>
        {icon && <div className="pb-[1px] px-1">{icon}</div>}
      </button>
      {isActive ? (
        <div className="h-[4px] w-auto bg-primary duration-300 rounded-[2px]" />
      ) : (
        <div className="h-[4px] w-auto" />
      )}
    </NextLink>
  );
};

export default Navbar;

