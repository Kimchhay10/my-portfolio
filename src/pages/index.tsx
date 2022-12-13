import { Spacer } from "@nextui-org/react";
import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import { CardDescription, Layout } from "../components";
import Icon from "../components/Icon";
import { EPages } from "../configs/enum";
import { motion } from "framer-motion";
import Typed from "react-typed";
import GeneralButton from "../components/GeneralButton";
import NextLink from "next/link";
import Container from "../components/Container";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { SWRConfig } from 'swr'

const HomePage: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Layout>
        <Container>
          <div className="flex flex-col w-full h-full bg-white">
            <div className="w-full flex items-start justify-between">
              <div className="w-full flex flex-col lg:w-[55%] font-bold text-[28px] sm:text-[30px] md:text-[40px] lg:text-[48px] xl:text-[54px]">
                <div className="w-full flex items-center space-x-6">
                  <span className="text-[24px]">{t('home_page.greeting')}</span>
                  <div className="w-auto p-2 sm:p-4 text-[18px] sm:text-[28px] bg-primary rounded-full text-white">
                    Web Developer
                  </div>
                </div>
                <div className="w-full">
                  <Typed
                    strings={[t('home_page.kimchhay')]}
                    typeSpeed={150}
                    backSpeed={100}
                    loop
                    backDelay={5000}
                  />
                </div>

                <Spacer y={1} />
                <div className="text-[18px] font-medium">
                  {t('home_page.description')}
                </div>
                <Spacer y={3} />

                <div className="flex items-center">
                  <Link
                    href={EPages.CONTACT}
                    className="relative px-6 py-3 font-bold text-black group text-[20px]"
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-primary group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                    <span className="relative text-white">Hire Me</span>
                  </Link>
                  <Spacer />
                  <NextLink href={EPages.PROJECT}>
                    <button className="flex items-center text-[20px] space-x-2 text-black">
                      <span>Project</span>
                      <Icon icon="chevron-circle-right-Bold" size={20} />
                    </button>
                  </NextLink>
                </div>
                <Spacer y={5} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <CardDescription
                    title="+20"
                    description="clients on works country"
                  />
                  <CardDescription title="+10" description="projects done" />
                  <CardDescription title="+5" description="enviroments" />
                  <CardDescription
                    title="Experinces"
                    description="web development API UX/UI"
                  />
                  <CardDescription
                    title="Email"
                    description="ethkimchhay03@gmail.com"
                  />
                  <CardDescription title="Contact" description="097 800 7423" />
                </div>
              </div>
              <Spacer x={2} />
              <div className="hidden xl:flex xl:w-[45%] h-[670px] bg-[#DED1C1] rounded-[16px] drop-shadow-xl">
                <img
                  src="../images/profile.png"
                  className="relative object-cover h-[670px] w-full rounded-[16px]"
                />
              </div>
            </div>
            <Spacer y={5} />
            <div className="flex flex-col sm:hidden">
              <motion.a
                href="https://web.facebook.com/kimchhay.eth.3/"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <GeneralButton title="Facebook" className="bg-[#15A7FC]" />
              </motion.a>
              <Spacer />
              <motion.a
                href="https://www.instagram.com/thisischhay_03/"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <GeneralButton title="Instagram" className="bg-[#262525]" />
              </motion.a>
              <Spacer />
              <motion.a
                href="https://www.linkedin.com/feed/"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <GeneralButton title="Linkedin" className="bg-[#0A66C2]" />
              </motion.a>
              <Spacer y={2} />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};
export default HomePage

export const getStaticProps: GetStaticProps = async ({
  locale,
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

