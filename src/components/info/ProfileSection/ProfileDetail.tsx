import { Box, Text, Flex, Spacer, HStack, useColorModeValue } from '@chakra-ui/react'
import { FaBirthdayCake, FaLinkedinIn, FaGithub, FaExternalLinkAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import useTrans from '@/hooks/useTrans';

const ProfileDetail = ({ email, phone, birthDate }) => {
    const trans = useTrans();
    const fillColor = useColorModeValue('light_text_stress', 'dark_text_stress');
    const blurColor = useColorModeValue('light_text_blur', 'dark_text_blur');

    return (
        <Flex direction="column" w='80%'>
            <Text
                fontWeight={600}
                mt={{ base: 0, lg: 2, xl: 5 }}
                fontSize={{ base: 'sm', lg: 'md', xl: 'lg' }}
                color={fillColor}
                letterSpacing={{ base: '0.2em', lg: '0.2em', xl: '0.4em' }}
                textTransform='uppercase'
            >
                {trans.profile.profile}
            </Text>
            <Box w='100%' my={2} h={0.5} bg={fillColor}></Box>
            <HStack
                py={2}
                spacing={{ base: '6px', lg: '8px', xl: '16px' }}
            >
                <FaEnvelope fontSize={{ base: 'sm', lg: 'md', xl: 'lg' }} color={fillColor} />
                <Text
                    as="a"
                    href={`mailto: ${email}`}
                    letterSpacing={{ base: 'wide', lg: 'wide', xl: 'widest' }}
                    fontSize={{ base: 'xs', lg: 'xs', xl: 'sm' }}
                    color={blurColor}
                >
                    {email}
                </Text>
            </HStack>
            <HStack
                py={2}
                spacing={{ base: '6px', lg: '8px', xl: '16px' }}
            >
                <FaPhoneAlt fontSize={{ base: 'sm', lg: 'md', xl: 'lg' }} color={fillColor} />
                <Text letterSpacing={{ base: 'wide', lg: 'wide', xl: 'widest' }} fontSize={{ base: 'xs', lg: 'xs', xl: 'sm' }} color={blurColor}>{phone}</Text>
            </HStack>
            <HStack
                py={2}
                spacing={{ base: '6px', lg: '8px', xl: '16px' }}
            >
                <FaBirthdayCake fontSize={{ base: 'sm', lg: 'md', xl: 'lg' }} color={fillColor} />
                <Text letterSpacing={{ base: 'wide', lg: 'wide', xl: 'widest' }} fontSize={{ base: 'xs', lg: 'xs', xl: 'sm' }} color={blurColor}>{trans.profile.bỉthdate}</Text>
            </HStack>
        </Flex >
    )
}


export default ProfileDetail;