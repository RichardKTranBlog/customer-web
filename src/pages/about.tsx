import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { Certifications } from '@/components/about';
import {
  Education,
  Projects,
  Skill,
  Summary,
  WorkExperience,
} from '@/components/about';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};
export default function About() {
  return (
    <>
      <Head>
        <title>Richard K. Tran - About</title>
      </Head>
      <MotionFlex
        id="main_about"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: 'easeInOut' }}
        direction="column"
        alignItems="center"
        justifyItems="flex-start"
        mb={10}>
        <Summary
          // @ts-ignore
          mb={50}
          px={12}
        />
        <Education my={50} />
        <Skill />
        <WorkExperience
          // @ts-ignore
          my={50}
        />
        <Projects />
        <Certifications px={12} />
      </MotionFlex>
    </>
  );
}
