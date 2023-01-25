import { FaLinkedinIn, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Text, Flex, HStack, Spacer, useColorModeValue } from '@chakra-ui/react'


const Social = ({ linkedinUrl, githubUrl }) => {
    const fillColor = useColorModeValue('light_text_stress', 'dark_text_stress');
    const blurColor = useColorModeValue('light_text_blur', 'dark_text_blur');
    return (
        <Flex justify='center' w='100%' h={10} my={4} px={{ base: 5, sm: 5, md: 5, lg: 6, xl: 8 }}>
            <HStack as='a' target="_blank" rel="noopener noreferrer" href={linkedinUrl} >
                <FaLinkedinIn size={25} color={fillColor} />
                <Text as='span' mx={2} fontSize={{ base: 'xs', lg: 'xs', xl: 'sm' }} color={blurColor}>Linkedin</Text>
                <FaExternalLinkAlt ml={3} fontSize={{ base: '0.8rem', lg: '0.8rem', xl: '1rem' }} color={fillColor} />
            </HStack>
            <Spacer />
            <HStack as='a' target="_blank" rel="noopener noreferrer" href={githubUrl}>
                <FaGithub size={25} color={fillColor} />
                <Text as='span' mx={2} fontSize={{ base: 'xs', lg: 'xs', xl: 'sm' }} color={blurColor}>Github</Text>
                <FaExternalLinkAlt ml={3} fontSize={{ base: '0.8rem', lg: '0.8rem', xl: '1rem' }} color={fillColor} />
            </HStack>
        </Flex>
    );
}

export default Social;