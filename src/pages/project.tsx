import { Spacer } from '@nextui-org/react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'
import { CardProject, Layout } from '../components'
import Container from '../components/Container';

const Project = () => {
  return (
    <Layout>
      <Container>
        <div className="w-full flex flex-col">
          <div className="">
            <CardProject
              projectTitle="Unbox"
              projectType="Ecommerce"
              projectUrl="https://unboxx.vercel.app/"
            />
            <Spacer />
            <CardProject
              projectTitle="Jomnot"
              projectType="Travel"
              projectUrl="https://jomnot.com/km"
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default Project
export const getStaticProps: GetStaticProps = async ({
  locale,
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};