import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useCallback } from "react";
import { ELanguages } from "../../configs/enum";
import { saveLanguage } from "../../configs/languageHandler";
import { useTranslation } from "next-i18next";
interface ChangeLanguageDropDownProps {}

const ChangeLanguageDropDown: React.FC<ChangeLanguageDropDownProps> = () => {
  const { i18n } = useTranslation('common');
  const router = useRouter();
  const goToLanguage =
    router.locale === ELanguages.EN ? ELanguages.KM : ELanguages.EN;
  const isEnglishLocale = router.locale === ELanguages.EN;

  const handleChangeLanguage = useCallback(() => {
    i18n.changeLanguage(goToLanguage, () => {
      saveLanguage(i18n.language);
    });
  }, [goToLanguage, i18n]);

  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="flex items-center">
        <div className="h-[36px] w-[36px] rounded-full transition-all hover:bg-primary">
          <Image
            src={
              isEnglishLocale ? "/images/lang_en.png" : "/images/lang_km.png"
            }
            width={36}
            height={36}
            alt="Change Language"
          />
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="shadow-lg absolute right-0 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-[12px] bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4 py-4">
            <Link
              href={{
                pathname: router.pathname,
                query: router.query,
              }}
              locale={ELanguages.KM}
              replace
              onClick={handleChangeLanguage}
            >
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active ? "bg-primary text-white" : "text-gray-900"
                    } flex items-center rounded-[6px]`}
                  >
                    <div
                      className={`h-[32px] w-[32px] rounded-full transition-all hover:bg-primary ${
                        router.locale === ELanguages.KM ? "bg-primary" : ""
                      }`}
                    >
                      <Image
                        src="/images/lang_km.png"
                        width={50}
                        height={50}
                        alt="Khmer"
                      />
                    </div>
                    <span
                      className={`rounded-[6px] px-[10px] py-[8px] text-[16px] font-kantumruy`}
                    >
                      ភាសាខ្មែរ
                    </span>
                  </div>
                )}
              </Menu.Item>
            </Link>

            <Link
              href={{
                pathname: router.pathname,
                query: router.query,
              }}
              locale={ELanguages.EN}
              replace
              onClick={handleChangeLanguage}
            >
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active ? "bg-primary text-white" : "text-gray-900"
                    } flex items-center rounded-[6px]`}
                  >
                    <div
                      className={`h-[32px] w-[32px] rounded-full transition-all hover:bg-primary ${
                        router.locale === ELanguages.EN ? "bg-primary" : ""
                      }`}
                    >
                      <Image
                        src="/images/lang_en.png"
                        width={50}
                        height={50}
                        alt="English"
                      />
                    </div>
                    <span
                      className={`rounded-[6px] px-[10px] py-[8px] text-[16px]`}
                    >
                      English
                    </span>
                  </div>
                )}
              </Menu.Item>
            </Link>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ChangeLanguageDropDown;
