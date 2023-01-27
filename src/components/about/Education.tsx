import React from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { Timeline } from '@/atoms/TimeLine';
import useTrans from '@/hooks/useTrans';
import { motion } from 'framer-motion';

export type EducationProps = {};

const MotionFlex = motion(Flex);
const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);
const listEffect = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};
const leftItemEffect = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
const rightItemEffect = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 50 },
};

export const Education = ({ ...props }) => {
  const trans = useTrans();
  const headingColor = useColorModeValue(
    'light_heading_color',
    'dark_heading_color',
  );
  const stressTextColor = useColorModeValue(
    'light_text_stress',
    'dark_text_stress',
  );
  const grayTextColor = useColorModeValue('light_text_blur', 'dark_text_blur');
  const timelineColor = useColorModeValue(
    'light_timeline_color',
    'dark_timeline_color',
  );
  const iconTimelineColor = useColorModeValue(
    'light_icon_timeline_color',
    'dark_icon_timeline_color',
  );
  const cardColor = 'stress_card_bg';
  const whiteTextColor = 'stress_card_text';

  return (
    <Box w="90%" px={{ base: 3, md: 5, lg: 8 }}>
      <MotionFlex
        direction="column"
        alignSelf="center"
        alignItems="center"
        {...props}>
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl' }}
          color={headingColor}
          textTransform="uppercase"
          fontWeight="bold">
          {trans.about.education_title}
        </Heading>
        <MotionGrid
          display={{ base: 'none', md: 'grid' }}
          initial="hidden"
          whileInView="visible"
          variants={listEffect}
          // viewport={{ once: true }}
          my={5}
          templateRows="repeat(1, 1fr)"
          templateColumns={{ base: 'repeat(5, 1fr)', lg: 'repeat(7, 1fr)' }}>
          <MotionGrid
            display={{ base: 'none', lg: 'grid' }}
            colSpan={1}
            variants={leftItemEffect}
            justifySelf="end">
            <Box boxSize="90px" pt={3}>
              <Image src="/images/CTU_logo.png" alt="CTU logo" />
            </Box>
          </MotionGrid>
          <MotionGridItem
            colSpan={2}
            variants={leftItemEffect}
            justifySelf="center">
            <VStack alignItems="flex-end">
              <Heading
                as="h6"
                color={stressTextColor}
                fontSize={{ base: 'xl', md: 'lg', lg: 'xl', xl: '2xl' }}
                pt={3}
                textAlign="right">
                {trans.about.university}
              </Heading>
              <Flex direction="column" color={grayTextColor}>
                <Text style={{ whiteSpace: 'nowrap' }} textAlign="right">
                  {trans.about.specialist}
                </Text>
                <Text
                  style={{ whiteSpace: 'nowrap' }}
                  textAlign="right"
                  opacity="90%">
                  2018 - 2022
                </Text>
              </Flex>
            </VStack>
          </MotionGridItem>

          <MotionGridItem colSpan={1}>
            <Timeline
              bg={timelineColor}
              iconColor={iconTimelineColor}
              icon={<Icon icon="cil:education" height="40" />}
              width="130px"
            />
          </MotionGridItem>

          <MotionGridItem colSpan={2} variants={rightItemEffect}>
            <Flex
              direction="column"
              maxW="16em"
              px={5}
              py={3}
              color={whiteTextColor}
              align="left"
              bgColor={cardColor}
              borderRadius={8}>
              <Text>
                <span>
                  <strong>{trans.about.degree_grade}:</strong>
                </span>{' '}
                {trans.about.good}
              </Text>
              <Text>
                <span>
                  <strong>GPA:</strong>
                </span>{' '}
                3.58/4
              </Text>
              <Text>{trans.about.scholarship}</Text>
            </Flex>
          </MotionGridItem>
        </MotionGrid>

        {/* Responsive */}
        <Grid
          display={{ base: 'grid', md: 'none' }}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={2}>
          <GridItem colSpan={1} rowSpan={1}>
            <Box boxSize="70px" pt={3}>
              <Image src="/images/CTU_logo.png" alt="CTU logo" />
            </Box>
          </GridItem>
          <GridItem colSpan={4} rowSpan={2} ml={2}>
            <Flex direction="column">
              <Heading
                as="h6"
                color={stressTextColor}
                fontSize={{ base: 'xl', md: 'lg', lg: 'xl', xl: '2xl' }}
                pt={3}>
                {trans.about.university}
              </Heading>
              <Flex direction="column" align="flex-start" color={grayTextColor}>
                <Text>{trans.about.specialist}</Text>
                <Text opacity="90%">2018 - 2022</Text>
              </Flex>
              <Flex direction="column" color={grayTextColor} mt={3}>
                <Text>
                  <span>
                    <strong>{trans.about.degree_grade}:</strong>
                  </span>{' '}
                  {trans.about.good}
                </Text>
                <Text>
                  <span>
                    <strong>GPA:</strong>
                  </span>{' '}
                  3.58/4
                </Text>
                <Text>{trans.about.scholarship}</Text>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </MotionFlex>
    </Box>
  );
};
