import { Spacer } from '@nextui-org/react';
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