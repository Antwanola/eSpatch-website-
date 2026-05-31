// src/components/Header.tsx
'use client'

import { Box, Flex, HStack, Button, IconButton, Link, useDisclosure, VStack } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';


const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'Technology', href: '/technology' },
    // { label: 'Contact', href: '/contact' },
]

export default function Header() {
    const { open, onToggle, onClose } = useDisclosure()
    const headerRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && open) {
                onClose()
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [open, onClose])

    useEffect(() => {
        if (!open) return

        const handleClickOutside = (e: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
                onClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [open, onClose])

    return (
        <Box as="header" ref={headerRef} borderBottom="0.5px solid" borderColor="gray.600" bg="bg" position="sticky" top={0} zIndex={100}>

            {/* Desktop */}
            <Flex
                px={{ base: 5, md: 8 }}
                h="64px"
                align="center"
                justify="space-between"
                display={{ base: 'none', md: 'flex' }}
            >
                {/* Logo */}
                <Flex align="center" gap={2}>
                    <img src="/eSpatch_logo.svg" alt="" width={100} />
                </Flex>

                {/* Nav links */}
                <HStack gap={8}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                fontSize="14px"
                                color="text"
                                position="relative"
                                pb="4px"
                                _hover={{ color: 'text', textDecoration: 'none' }}
                                _after={{
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '-2px',
                                    left: 0,
                                    width: isActive ? '100%' : '0%',
                                    height: '2px',
                                    background: '#01decb',
                                    opacity: isActive ? 0.5 : 0,
                                    borderRadius: '2px',
                                    transition: 'width 0.2s ease, opacity 0.2s ease',
                                }}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                </HStack>

                {/* Actions */}
                <HStack gap={3}>
                    <Button size="sm" bg="button" className='btn' color="text" _hover={{ opacity: 0.85 }}>
                        Partner with Us <IoIosArrowRoundForward />
                    </Button>
                </HStack>
            </Flex>

            {/* Mobile */}
            <Flex
                px={5}
                h="56px"
                align="center"
                justify="space-between"
                display={{ base: 'flex', md: 'none' }}
            >
                <Flex align="center" gap={2}>
                    <Box w="8px" h="8px" borderRadius="full" bg="button" />
                    <Box fontFamily="body" fontSize="18px" fontWeight="700" letterSpacing="-0.3px">
                        eSpatch
                    </Box>
                </Flex>

                {/* Hamburger */}
                <IconButton
                    aria-label="Toggle menu"
                    bg={'button'}
                    onClick={onToggle}
                >
                    {open ? (
                        <Flex direction="column" gap="0px" align="center" justify="center" w="20px" h="20px">
                            <Box
                                w="20px" h="1.5px" bg="text" borderRadius="2px"
                                style={{ transform: 'rotate(45deg) translateY(0.75px)' }}
                            />
                            <Box
                                w="20px" h="1.5px" bg="text" borderRadius="2px"
                                style={{ transform: 'rotate(-45deg) translateY(-0.75px)' }}
                            />
                        </Flex>
                    ) : (
                        <Flex direction="column" gap="4px">
                            <Box w="20px" h="1.5px" bg="text" borderRadius="2px" />
                            <Box w="20px" h="1.5px" bg="text" borderRadius="2px" />
                            <Box w="20px" h="1.5px" bg="text" borderRadius="2px" />
                        </Flex>
                    )}
                </IconButton>
            </Flex>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <VStack
                            align="stretch"
                            px={5}
                            pb={5}
                            borderTop="0.5px solid"
                            borderColor="border"
                            gap={0}
                        >
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        fontSize="15px"
                                        color={isActive ? '#01decb' : 'text'}
                                        py={3}
                                        borderBottom="0.5px solid"
                                        borderColor="border"
                                        _hover={{ color: 'text', textDecoration: 'none' }}
                                        onClick={onClose}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            })}
                            <VStack pt={3} gap={2}>
                                <Button w="full" size="lg" bg="button" className='btn' color="text" _hover={{ opacity: 0.85 }}>
                                    Partner with us
                                </Button>
                            </VStack>
                        </VStack>
                    </motion.div>
                )}
            </AnimatePresence>

        </Box>
    )
}