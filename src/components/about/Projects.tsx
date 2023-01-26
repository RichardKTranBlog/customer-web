import React from 'react';
import {
  Image,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Box,
  Stack,
  Spacer,
} from '@chakra-ui/react';
import useTrans from '../../hooks/useTrans';
import { ProjectCard } from '@/atoms/Card';
import { motion } from 'framer-motion';

export type ProjectsProps = {};

const MotionFlex = motion(Flex);
export const Projects = ({ ...props }: ProjectsProps) => {
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
  const frameColor = useColorModeValue('#003049', '#454545');

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
        {trans.about.project_title}
      </Heading>
      <ProjectCard
        projectName={`${trans.about.personal_web_name} (In progress)`}
        description={trans.about.personal_web_description}
        technologies="ReactJS/NextJS, Laravel"
        imgUrl="/images/projects/blog1.png"
        srcUrl="https://github.com/richardktran/Personal-Blog"
        frameColor={frameColor}
        subColor={grayTextColor}
        titleColor={stressTextColor}
      />
      <ProjectCard
        projectName="QR Scanner Museum"
        description={trans.about.qr_description}
        technologies="Flutter, Laravel"
        imgUrl="/images/projects/qr.png"
        srcUrl="https://github.com/richardktran/Flutter_QR_Scanner_Museum"
        frameColor={frameColor}
        subColor={grayTextColor}
        titleColor={stressTextColor}
      />
      <ProjectCard
        projectName="HealthCare in Can Tho"
        description={trans.about.healcare_description}
        technologies="Flutter, Firebase"
        imgUrl="/images/projects/cthealth1.png"
        srcUrl="https://github.com/richardktran/Health-Care-In-CanTho"
        frameColor={frameColor}
        subColor={grayTextColor}
        titleColor={stressTextColor}
      />
      <ProjectCard
        projectName="Wowfood"
        description={trans.about.wowfood_description}
        technologies="NodeJS, ReactJS, MySQL"
        imgUrl="/images/projects/wowfood.png"
        srcUrl="https://github.com/richardktran/wowfood-project"
        frameColor={frameColor}
        subColor={grayTextColor}
        titleColor={stressTextColor}
      />
      <ProjectCard
        projectName="Bookworm"
        description={trans.about.bookworm_description}
        technologies="Laravel, ReactJS, PostgreSQL"
        imgUrl="/images/projects/bookworm.png"
        srcUrl="https://github.com/richardktran/Bookworm-App"
        frameColor={frameColor}
        subColor={grayTextColor}
        titleColor={stressTextColor}
      />
      <ProjectCard
        projectName="Quick Formula"
        description={trans.about.qf_description}
        technologies="HTML, CSS, PHP, Javascript, MySQL"
        imgUrl="/images/projects/qf1.png"
        srcUrl="https://github.com/richardktran/Quick-Formula"
        frameColor={frameColor}
        subColor={grayTextColor}
        titleColor={stressTextColor}
      />
    </MotionFlex>
  );
};
