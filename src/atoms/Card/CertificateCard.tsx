import React from "react";
import { Image, Flex, Heading, Text } from "@chakra-ui/react";
import useTrans from "../../hooks/useTrans";
import { motion } from "framer-motion";

export type CertificateCardProps = {
  bgColor: string;
  nameColor: string;
  subColor: string;
  img: string;
  name: string;
  company: string;
  dateOfIssue: string;
  imgRight?: boolean;
};

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);
const listEffect = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};
const itemEffect = {
  visible: { opacity: 1, width: null },
  hidden: { opacity: 0, width: 0 },
};

export const CertificateCard = ({
  img,
  name,
  company,
  dateOfIssue,
  imgRight = false,
  bgColor,
  nameColor,
  subColor,
  ...props
}: CertificateCardProps) => {
  const trans = useTrans();
  return (
    <MotionFlex
      direction={{ base: "column", md: imgRight ? "row-reverse" : "row" }}
      alignItems="center"
      w={{ base: "95%", md: "95%", lg: "90%", xl: "85%" }}
      my={7}
      variants={listEffect}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      <MotionImage
        variants={itemEffect}
        whileHover={{ scale: 1.2 }}
        src={img}
        borderRadius="16px"
        w={{ base: "90%", md: "50%", lg: "45%", xl: "40%" }}
        objectFit="fill "
        alt="QF formula"
      />
      <MotionFlex
        variants={itemEffect}
        minW="40%"
        direction="column"
        align="flex-start"
        bgColor={bgColor}
        borderRadius={{
          base: "10px",
          md: imgRight ? "20px 0 0 20px" : "0 20px 20px 0",
        }}
        my={{ base: "10px", md: "0" }}
        px={7}
        py={5}
      >
        <Heading
          as="h4"
          fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
          alignSelf="left"
          mb={2}
          color={nameColor}
        >
          {name}
        </Heading>
        <Text
          fontSize={{ base: "xs", lg: "xs", xl: "sm" }}
          py={1}
          lineHeight={{ base: "base", lg: "tall", xl: "tall" }}
          textAlign="left"
          color={subColor}
        >
          {company}
        </Text>
        <Text
          fontSize={{ base: "xs", lg: "xs", xl: "sm" }}
          py={1}
          lineHeight={{ base: "base", lg: "tall", xl: "tall" }}
          textAlign="left"
          color={subColor}
        >
          {dateOfIssue}
        </Text>
      </MotionFlex>
    </MotionFlex>
  );
};
