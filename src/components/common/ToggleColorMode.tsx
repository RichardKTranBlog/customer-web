import React from 'react'
import { IconButton, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from 'framer-motion'

export default function ToggleColorMode() {
    const { toggleColorMode } = useColorMode()
    const toggleColor = useColorModeValue('purple', 'orange');
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                whileTap={{ scale: 0.7 }}
            >
                <IconButton
                    aria-label="Toggle theme"
                    colorScheme={toggleColor}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}

                />
            </motion.div>
        </AnimatePresence>
    )
}
