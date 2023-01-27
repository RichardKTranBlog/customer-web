import React from 'react';
import {
  Image,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { CertificateCard } from '@/atoms/Card';
import { motion } from 'framer-motion';
import useTrans from '@/hooks/useTrans';

export type CertificationsProps = {};

const MotionFlex = motion(Flex);

export const Certifications = ({ ...props }) => {
  const trans = useTrans();
  const headingColor = useColorModeValue(
    'light_heading_color',
    'dark_heading_color',
  );
  const stressTextColor = 'stress_card_text';
  const grayTextColor = 'stress_card_text_blur';
  const bgColor = 'stress_card_bg';

  return (
    <MotionFlex
      direction="column"
      w="100%"
      alignItems="center"
      justifyItems="center"
      {...props}>
      <Heading
        as="h1"
        fontSize={{ base: '2xl', md: '4xl' }}
        color={headingColor}
        textTransform="uppercase"
        fontWeight="bold"
        my={5}>
        {trans.about.certifications_title}
      </Heading>
      <CertificateCard
        bgColor={bgColor}
        nameColor={stressTextColor}
        subColor={grayTextColor}
        img="/images/certifications/nashtech.png"
        name={trans.about.rookie_cert_name}
        company="NashTech"
        dateOfIssue="15 Sep, 2021"
      />

      <CertificateCard
        bgColor={bgColor}
        nameColor={stressTextColor}
        subColor={grayTextColor}
        imgRight
        img="/images/certifications/olympic.jpg"
        name={trans.about.olympic_cert_name}
        company={trans.about.vaip}
        dateOfIssue="11 Dec, 2020"
      />

      <CertificateCard
        bgColor={bgColor}
        nameColor={stressTextColor}
        subColor={grayTextColor}
        img="/images/certifications/HashCode2020.png"
        name="Google Hash Code 2020"
        company="Google Inc."
        dateOfIssue="10 Feb, 2020"
      />
      <CertificateCard
        bgColor={bgColor}
        nameColor={stressTextColor}
        subColor={grayTextColor}
        imgRight
        img="/images/certifications/CodeJam2019.png"
        name="Google Code Jam 2019"
        company="Google Inc."
        dateOfIssue="05 Apr, 2019"
      />

      <CertificateCard
        bgColor={bgColor}
        nameColor={stressTextColor}
        subColor={grayTextColor}
        img="/images/certifications/snackdown2019.png"
        name={trans.about.snackdown2019}
        company="CodeChef"
        dateOfIssue="18 Mar, 2019"
      />
      <CertificateCard
        imgRight
        bgColor={bgColor}
        nameColor={stressTextColor}
        subColor={grayTextColor}
        img="/images/certifications/snackdown2017.png"
        name={trans.about.snackdown2017}
        company="CodeChef"
        dateOfIssue="28 Jun, 2019"
      />
    </MotionFlex>
  );
};
