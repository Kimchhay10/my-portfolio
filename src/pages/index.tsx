import { Spacer } from "@nextui-org/react";
import type { NextPage } from "next";
import Link from "next/link";
import { CardDescription, Layout } from "../components";
import Icon from "../components/Icon";
import { EPages } from "../configs/enum";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col w-full h-full bg-white">
          <div className="w-full flex items-start">
            <div className="w-full lg:w-1/2 font-bold text-[28px] sm:text-[30px] md:text-[40px] lg:text-[48px] xl:text-[54px]">
              <div className="flex items-center space-x-8">
                <span>Hi! I am </span>
                <div className="w-auto p-2 sm:p-4 text-[18px] sm:text-[28px] bg-primary rounded-full text-white">
                  Web Developer
                </div>
              </div>
              <span>Kimchhay</span>
              <Spacer y={1} />
              <div className="text-[18px] font-medium">
                Designing user interface for over 5 years <br />
                as a web developer
              </div>
              <Spacer />

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
                <button className="flex items-center text-[20px] space-x-2">
                  <span>Project</span>
                  <Icon icon="chevron-circle-right-Bold" size={20} />
                </button>
              </div>
              <Spacer y={3} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CardDescription
                  title="+84"
                  description="clients on works worldwide"
                />
                <CardDescription title="+10" description="projects done" />
                <CardDescription
                  title="Email"
                  description="ethkimchhay03@gmail.com"
                />
                <CardDescription
                  title="Facebook"
                  description="Kimchhay Eth"
                  icon={<Icon icon="Facebook" size={20} color="#3b5998" />}
                />
              </div>
            </div>
            <Spacer x={2} />
            <div className="hidden lg:flex w-1/2 h-[700px] bg-[#DED1C1] rounded-[16px]">
              <img
                src="../images/profile.png"
                className="relative object-cover h-[670px] w-full rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
