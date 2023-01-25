import {
  useColorModeValue,
  Button,
  useColorMode,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Text,
  Heading,
  Avatar,
  Image,
  HStack
} from '@chakra-ui/react'
import React, { useState } from 'react';
import NextLink from 'next/link'
import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoMdUndo } from 'react-icons/io';
import useTrans from '@/hooks/useTrans';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { motion } from 'framer-motion';
import ToggleColorMode from '@/components/common/ToggleColorMode';




const MotionButton = motion(Button);

export const Navbar = ({ path, toggleShowInfo }) => {

  const [cookie, setCookie] = useCookies(['NEXT_LOCALE']);
  const trans = useTrans()
  const router = useRouter()

  const { locale } = useRouter()



  const setShowInfo = () => {
      toggleShowInfo();
  }

  const changeLang = (lang: string) => {
      router.push(path, path, { locale: lang })
      if (cookie.NEXT_LOCALE !== lang) {
          setCookie("NEXT_LOCALE", lang, { path: "/" });
      }
  }

  return (
      <>
          <Box
              position="fixed"
              as="nav"
              w="100%"
              top="0"
              pt='1rem'
              width="100%"
              height="5rem"
              css={{ backdropFilter: 'blur(10px)' }}
              zIndex={0}
          >
              <Flex
                  pos='fixed'
                  left='1rem'
                  align='center'
                  pl={{ base: '1rem', lg: '3rem' }}
                  display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
              >
                  <Heading mr={5} onClick={() => setShowInfo()} _hover={{ cursor: 'pointer' }}>
                      <Avatar size="lg" name="Logo" src="/images/avatar.jpg" />
                  </Heading>
                  <Box>
                      <IoMdUndo size={30} color="#22B07D" />
                      <Text>{trans.navbar.look_profile}</Text>
                  </Box>

              </Flex>

              <Flex
                  pos='fixed'
                  right='1rem'
                  align='center'
                  pr={{ base: '1rem', lg: '3rem' }}
              >
                  <Flex
                      display={{ base: 'none', lg: 'flex' }}
                      mr={5}
                  >
                      <LinkItem href='/' path={path}>
                          {trans.navbar.my_blog}
                      </LinkItem>
                      <LinkItem href='/category' path={path}>
                          {trans.navbar.category}
                      </LinkItem>
                      <LinkItem href='/about' path={path}>
                          {trans.navbar.about_me}
                      </LinkItem>
                  </Flex>
                  <ToggleColorMode />

                  <Flex display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }} mx={3} >
                      <Menu >
                          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
                              {locale == 'vi' ? "VI" : "EN"}
                          </MenuButton>
                          <MenuList>
                              <MenuItem onClick={() => changeLang('vi')}>Tiếng Việt</MenuItem>
                              <MenuItem onClick={() => changeLang('en')}>English</MenuItem>
                          </MenuList>
                      </Menu>
                  </Flex>

                  {/* Responsive */}
                  <Flex display={{ base: 'flex', lg: 'none' }}>
                      <Menu zIndex={1000} >
                          <MenuButton
                              as={IconButton}
                              icon={<HamburgerIcon />}
                              variant="outline"
                              size='lg'
                              ml={3}
                              aria-label="Open Menu"
                          />
                          <MenuList >
                              <NextLink href="/" passHref>
                                  <MenuItem>{trans.navbar.my_blog}</MenuItem>
                              </NextLink>
                              <NextLink href="/category" passHref>
                                  <MenuItem>{trans.navbar.category}</MenuItem>
                              </NextLink>
                              <NextLink href="/about" passHref>
                                  <MenuItem>{trans.navbar.about_me}</MenuItem>
                              </NextLink>
                              <HStack spacing={5} mt={2} ml={5}>
                                  <Box boxSize='50px' onClick={() => changeLang('vi')}>
                                      <Image src='/images/vn_flag.svg' alt='Viet Nam' />
                                  </Box>
                                  <Box boxSize='50px' onClick={() => changeLang('en')}>
                                      <Image src='/images/en_flag.svg' alt='English' />
                                  </Box>
                              </HStack>
                          </MenuList>
                      </Menu>
                  </Flex>
              </Flex>
          </Box>

      </>
  );
}


const LinkItem = ({ href, children, path }) => {
  const active = path === href;
  return (
      <NextLink href={href} passHref>
          <MotionButton
              whileTap={{ scale: 0.7 }}
              _focus={{
                  outline: 'none',
              }}
              _hover={{
                  backgroundColor: undefined
              }}
              variant='ghost'
              aria-label={children}
              w='100%'
              bgColor={active ? '#22B07D' : undefined}
              color={active ? '#FFFFFF' : undefined}
              ml={2}
          >
              <Heading fontSize='md' fontWeight='bold'>{children}</Heading>
          </MotionButton>
      </NextLink >
  );
}
