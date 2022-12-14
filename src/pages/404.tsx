import { Text } from '@nextui-org/react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React from 'react'
import { EPages } from '../configs/enum';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <Text h1>Hehe!<br/>404 - Page Not Found</Text>

      <Link href={EPages.HOME} className="relative px-5 py-2 font-medium text-white group">
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
        <span className="relative">Back Home</span>
      </Link>
    </div>
  );
}

export default NotFound
export const getStaticProps: GetStaticProps = async ({
  locale,
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};