import { Spacer, Text } from "@nextui-org/react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { AboutBanner, Layout } from "../components";
import Container from "../components/Container";

const About = () => {
  const educationItems = [
    { title: "Primary School", description: "Prek Tmei Primary School, basement educated place which builds the foundation for every students" },
    { title: "High School", description: "Hun Sen Kohthom High School, sacrify our mentality and physic to be ready on the state exam" },
    { title: "College", description: "Royal University Of Phnom Penh, deep dive in our one and only major to become a professor and spead it in the workspaces" },
  ];
  const workItems = [
    { title: "Tux Global institute", description: "As web designer and application to build there school management" },
    { title: "Jomnot", description: "Learn more on API as backend to request and response data also link with database with no SQL" },
  ];
  return (
    <Layout>
      <Container>
        <div className="w-full flex flex-col">
          <Text h1 className="text-center text-[40px] font-medium">
            More detail about me
          </Text>
          <span className="text-gray-700 text-center">
            Get more my information within education and working enviroments
          </span>
          <Spacer y={3} />
          <AboutBanner items={educationItems} headTitle="Education" />
          <Spacer y={3} />
          <AboutBanner items={workItems} headTitle="Work Enviroments" />
        </div>
      </Container>
    </Layout>
  );
};

export default About;
export const getStaticProps: GetStaticProps = async ({
  locale,
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
