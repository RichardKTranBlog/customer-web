import { Box, Circle, Flex } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';

export type TimeLineProps = {
  icon: React.ReactNode;
  bg: string;
  iconColor: string;
  width: string;
};

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

export const Timeline = ({
  icon,
  bg,
  iconColor,
  width,
  ...props
}: TimeLineProps) => {
  const variants = {
    visible: { height: width, minHeight: '100px' },
    hidden: { height: 0, minHeight: 0 },
  };
  return (
    <MotionFlex direction="column" align="center" {...props}>
      <Circle size="60px" bg={bg} color={iconColor}>
        {icon}
      </Circle>
      <MotionBox
        variants={variants}
        transition={{ duration: 0.2 }}
        w={0}
        borderRightWidth="3px"
        borderRightStyle="dashed"
        borderRightColor={bg}
        minH="100px"
        h={width}></MotionBox>
      <Circle size="10px" bg={bg} color={iconColor}></Circle>
    </MotionFlex>
  );
};
