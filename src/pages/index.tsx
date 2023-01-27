import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { BlogItem } from '@/components/blog';

const MotionFlex = motion(Flex);

const listEffect = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};
const itemEffect = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Richard K. Tran - Blog</title>
      </Head>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: 'easeInOut' }}
        style={{ position: 'relative' }}>
        <MotionFlex
          initial="hidden"
          animate="visible"
          variants={listEffect}
          direction="column"
          alignItems="center"
          pb={10}>
          <BlogItem href="posts/1" variants={itemEffect} />
          <BlogItem href="posts/1" variants={itemEffect} />
          <BlogItem href="posts/1" variants={itemEffect} />
          <BlogItem href="posts/1" variants={itemEffect} />
        </MotionFlex>
      </motion.div>
    </>
  );
}
