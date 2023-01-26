import { Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import useTrans from '@/hooks/useTrans';
import { motion } from 'framer-motion';

export type SummaryProps = {};

const MotionFlex = motion(Flex);

export const Summary = ({ ...props }: SummaryProps) => {
  const trans = useTrans();
  const headingColor = useColorModeValue(
    'light_heading_color',
    'dark_heading_color',
  );
  const textColor = useColorModeValue('light_text_stress', 'dark_text_stress');

  return (
    <MotionFlex justify="center" align="center" direction="column" {...props}>
      <Heading
        as="h1"
        fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
        color={headingColor}
        textTransform="uppercase"
        fontWeight="bold">
        {trans.about.summary_title}
      </Heading>
      <Text my={3} style={{ textIndent: 20 }} color={textColor}>
        {trans.about.summary1}
      </Text>
      <Text style={{ textIndent: 20 }} color={textColor}>
        {trans.about.summary2}
      </Text>
    </MotionFlex>
  );
};
