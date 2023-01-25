import {
  Box,
  Flex,
  Heading,
  Avatar,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { Navbar } from "@/layouts/Navbar";
import ProfileSection from "@/components/info/ProfileSection/ProfileSection";

export const Layout = ({
  children,
  router,
}: {
  children: React.ReactNode;
  router: any;
}) => {
  const [isShowInfo, setShowInfo] = useState(false);
  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");

  const handleShowInfo = () => {
    setShowInfo(!isShowInfo);
  };

  const handleCloseInfo = () => {
    setShowInfo(false);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Annowit's homepage" />
        <meta name="author" content="Richard Annowit" />
        <meta name="author" content="richardannowit" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Richard Annowit's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Richard Annowit - Homepage</title>
      </Head>

      <Flex
        pl={{ base: "0", md: "0", lg: "25%", xl: "25%" }}
        pt="6rem"
        w="100%"
        minH="100vh"
        bg={useColorModeValue("light_bg", "dark_bg")}
        direction="column"
      >
        {children}
      </Flex>
      <Navbar path={router.asPath} toggleShowInfo={handleShowInfo} />

      {isLargerThan960 && <ProfileSection closeInfo={handleCloseInfo} />}

      {isShowInfo ? (
        <>
          <Box
            className="blur"
            position="fixed"
            top={0}
            left={0}
            display={{
              base: "block",
              sm: "block",
              md: "block",
              lg: "none",
              xl: "none",
            }}
            w="100%"
            h="100vh"
            bg="gray.100"
            opacity="10%"
            onClick={handleCloseInfo}
          />
          <ProfileSection closeInfo={handleCloseInfo} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
