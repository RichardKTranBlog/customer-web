import React from 'react';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import CardName from './CardName';
import ProfileDetail from './ProfileDetail';
import Social from './Social';
import { CloseIcon } from '@chakra-ui/icons'
import useTrans from '@/hooks/useTrans';

export default function ProfileSection({ closeInfo }) {
    const bg = useColorModeValue('light_card_bg', 'dark_card_bg')
    const trans = useTrans()


    return (
        <Box
            position="fixed"
            top={0}
            justifyContent='space-between'
            flexDir='column' w={{ base: '100%', sm: '70%', md: '50%', lg: '25%', xl: '25%' }}
            bg={bg}
            minHeight="100%"
            display='flex'
            zIndex={0}
        >
            <Flex
                pos="absolute"
                right='1rem'
                top='1rem'
                _hover={{ cursor: 'pointer' }}
                onClick={() => closeInfo()}
                display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
            >
                <CloseIcon />
            </Flex>
            <Flex
                as='section'
                direction='column'
                pt={{ base: 5, lg: 5, xl: 8 }}
                textAlign='center'
                align='center'
            >
                <CardName
                    avatar="/images/avatar.jpg"
                    name={trans.profile.name}
                    specialist={trans.profile.specialist}
                    shortDescription={trans.profile.short_description}
                />

                <ProfileDetail
                    email="richardktran.dev@gmail.com"
                    phone="(+84) 947 685 343 (VN)"
                    birthDate="01 May, 2000"
                />


            </Flex>

            <Social
                linkedinUrl="https://www.linkedin.com/in/richardktrandev/"
                githubUrl="https://github.com/richardktran"
            />
        </Box>
    );
}
