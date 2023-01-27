import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import useTrans from '@/hooks/useTrans';

export type ProjectCardProps = {
  projectName: string;
  description: string;
  technologies: string;
  imgUrl: string;
  srcUrl: string;
  titleColor: string;
  frameColor: string;
  subColor: string;
};

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionStack = motion(Stack);
const MotionImage = motion(Image);
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
const leftItemEffect = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
const rightItemEffect = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 20 },
};

export const ProjectCard = ({
  projectName,
  description,
  technologies,
  imgUrl,
  srcUrl,
  titleColor,
  frameColor,
  subColor,
}: ProjectCardProps) => {
  const trans = useTrans();
  return (
    <Box w="100%" mb={10}>
      <MotionStack
        variants={listEffect}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        spacing="0"
        direction="column"
        position={{ base: 'static', md: 'relative' }}>
        <MotionFlex
          w={{ base: '100%', md: '50%' }}
          px={{ base: '3', md: '5', lg: '8', xl: '10' }}
          variants={leftItemEffect}
          justify="center"
          alignItems="flex-start">
          <MotionImage
            boxShadow="dark-lg"
            whileHover={{ scale: 1.2 }}
            src={imgUrl}
            borderRadius="lg"
            // w="100%"
            maxH="303px"
            objectFit="fill "
            alt={projectName}
          />
        </MotionFlex>
        <MotionFlex
          variants={rightItemEffect}
          display="column"
          justify="space-between"
          borderTop={{ base: 'none', md: `1px solid ${frameColor}` }}
          borderBottom={{ base: `1px solid ${frameColor}`, md: 'none' }}
          // align="flex-start"
          w={{ base: '100%', md: '45%' }}
          boxSizing="border-box"
          // h={{ base: '200px', md: '100%' }}
          position={{ base: 'static', md: 'absolute' }}
          left="50%"
          top={0}
          px={{ base: '5', md: '0', lg: '0', xl: '0' }}
          py={{ base: '3', md: '5', lg: '8', xl: '10' }}>
          <Heading
            as="h2"
            fontSize={{ base: 'lg', md: '1xl', lg: '1xl', xl: '2xl' }}
            mb={2}
            color={titleColor}>
            {projectName}
          </Heading>
          <Text
            fontSize={{ base: 'xs', lg: 'md', xl: 'md' }}
            py={1}
            lineHeight={{ base: 'base', lg: 'tall', xl: 'tall' }}
            textAlign="left"
            color={subColor}
            pb={3}>
            <span>
              <strong>{trans.about.description}: </strong>
            </span>
            {description}
          </Text>
          <Text fontSize={{ base: 'xs', lg: 'md', xl: 'md' }} lineHeight="tall">
            <span>
              <strong>{trans.about.technologies} </strong>
            </span>
            {technologies}
          </Text>
          <Text fontSize={{ base: 'xs', lg: 'md', xl: 'md' }} lineHeight="tall">
            <span>
              <strong>Source code: </strong>
            </span>
            <Text as="span" fontWeight="bold" color="tag_color">
              <a href={srcUrl} rel="noreferrer" target="_blank">
                Click here
              </a>
            </Text>
          </Text>
        </MotionFlex>
      </MotionStack>
    </Box>
  );
};
