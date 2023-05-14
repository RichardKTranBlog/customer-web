import React from 'react';
import {
  Box,
  Text,
  Heading,
  Flex,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import useTrans from '../../hooks/useTrans';
import { motion } from 'framer-motion';

export type BlogItemProps = {
  href: string;
  variants: object;
};

const MotionBox = motion(Box);

export const BlogItem = ({ href, ...props }: BlogItemProps) => {
  const trans = useTrans();
  const bg = useColorModeValue('light_card_bg', 'dark_card_bg');
  const textColor = useColorModeValue('light_text_stress', 'dark_text_stress');
  const subTextColor = useColorModeValue('light_text_blur', 'dark_text_blur');
  const tagColor = 'tag_color';

  return (
    <MotionBox
      whileHover={{ scale: 1.04 }}
      // animate={{ x: [null, 100, 0] }}
      // transition={{ duration: 1, times: [0, 0.2, 1] }}
      bg={bg}
      w="75%"
      borderRadius={12}
      px={{ base: '6', lg: '8', xl: '10' }}
      py={{ base: '6', lg: '7', xl: '7' }}
      my={3}
      {...props}>
      <HStack className="tag" spacing={5}>
        <Link href={href}>
          <Text as="span" color={tagColor} fontSize="sm" fontWeight="bold">
            SELF-HELP
          </Text>
        </Link>

        <Link href={href}>
          <Text as="span" color={tagColor} fontSize="sm" fontWeight="bold">
            MOTIVATION
          </Text>
        </Link>
      </HStack>
      <Link href={href}>
        <Heading
          my={{ base: '1', lg: '2', xl: '3' }}
          color={textColor}
          fontSize="xl">
          How to remember more of what you read
        </Heading>
      </Link>

      <Text
        color={subTextColor}
        fontSize="sm"
        my={{ base: '1', lg: '2', xl: '3' }}
        noOfLines={3}
        lineHeight={{ base: '1.7', lg: '1.9', xl: '1.9' }}>
        The digitization of information is a double-edged sword. It’s an
        unassailable benefit that every bit (and byte) of knowledge resides on
        the supercomputer in our pocket. Yet, the unintended consequence is that
        we’re bombarded with information: Kindle books, blog posts, podcasts,
        academic journals, videos and much more. The New York Times estimates
        that we we consume 34 gigabytes of content a day. That’s the equivalent
        of 25% of War and Peace every single day.
      </Text>
      <Flex justify="space-between">
        <Text color={subTextColor} fontSize="sm">
          7 April, 2023
        </Text>
        <Link href={href}>
          <Flex align="center">
            <Text color={tagColor} mr={3} fontSize="sm" fontWeight="bold">
              {trans.blog.read_more}{' '}
            </Text>
            <FaArrowRight color={tagColor} />
          </Flex>
        </Link>
      </Flex>
    </MotionBox>
  );
};
