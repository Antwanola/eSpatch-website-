import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import FooterMargin from './component/MarginGuides/FooterMargin'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaInstagram, FaLeaf } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { MdAddLocationAlt } from "react-icons/md";
import { MdEmail } from "react-icons/md";


export default function Footer() {
    return (
        <Box bg={'footerBg'} borderColor={"gray.100"} >
            <FooterMargin>
                <Box borderBottom={'1px solid gray'}>
                    <Flex
                        mb={{ base: 10, md: 20 }}
                        justifyContent={'space-between'}
                        flexDirection={{ base: 'column', sm: 'row' }}
                        gap={6}
                        alignItems={{ base: 'flex-start', sm: 'center' }}
                    >
                        <Flex borderRadius={'xl'} bgColor={'#081b4148'} border={'.3px ridge gray'} px={5} h="40px" gap={2} alignItems={"center"} fontSize={'xs'}  >
                            <FaLeaf color='#00B4A6' />
                            SDG 11 & 13 Aligned
                        </Flex>
                        <Button bgColor={'button'} borderRadius={'lg'} size={{ base: 'md', md: 'lg' }} w={{ base: 'full', sm: 'auto' }}>
                            Start a partnership <span><IoIosArrowRoundForward /></span>
                        </Button>
                    </Flex>
                </Box>

                <Flex
                    borderBottom={'1.5px ridge gray'}
                    mt={10}
                    justifyContent={'space-between'}
                    flexDirection={{ base: 'column', md: 'row' }}
                    flexWrap="wrap"
                    gap={{ base: 10, md: 4 }}
                    pb={20}
                >
                    <Box width={{ base: '50%', md: '30%', lg: '25%' }}>
                        <img src="https://6vurzr5o2pmbrosi.public.blob.vercel-storage.com/Vector.png" alt="eSpatch Logo" width={50} />
                        <Text mt={4} textWrap={'wrap'} fontSize={'md'} color={'gray'}>
                            Electric Fleet Delivery-as-a-Service, powering sustainable logistics across Africa.
                        </Text>
                        <Flex mt={6} gap={3}>
                            <Link href='#' bg={'#6b7e901d'} border={'1px ridge gray'} p={2} color={'gray'} borderRadius={10} _hover={{ color: 'button' }}><FaLinkedinIn /></Link>
                            <Link href='#' bg={'#6b7e901d'} border={'1px ridge gray'} p={2} color={'gray'} borderRadius={10} _hover={{ color: 'button' }}><BsTwitterX /></Link>
                            <Link href='#' bg={'#6b7e901d'} border={'1px ridge gray'} p={2} color={'gray'} borderRadius={10} _hover={{ color: 'button' }}><FaInstagram /></Link>
                        </Flex>
                    </Box>

                    <Box width={{ base: '100%', sm: '45%', md: 'auto' }} >
                        <Heading fontFamily={'Syne'} mt={{ base: 0, md: 8 }} mb={4} fontSize={'lg'} color={"button"}>Quick Links</Heading>
                        <Flex direction="column" gap={3}>
                            <Link color={'gray'} _hover={{ color: 'button' }} href="#" fontSize={'sm'} display="flex" alignItems="center" gap={2}>
                                <LiaGreaterThanSolid fontSize={'10px'} color='#00B4A6' /> Partnership Enquiry
                            </Link>
                            <Link color={'gray'} _hover={{ color: 'button' }} href="#" fontSize={'sm'} display="flex" alignItems="center" gap={2}>
                                <LiaGreaterThanSolid fontSize={'10px'} color='#00B4A6' /> Investor Deck Report
                            </Link>
                            <Link color={'gray'} _hover={{ color: 'button' }} href="#" fontSize={'sm'} display="flex" alignItems="center" gap={2}>
                                <LiaGreaterThanSolid fontSize={'10px'} color='#00B4A6' /> Press Kit
                            </Link>
                            <Link color={'gray'} _hover={{ color: 'button' }} href="#" fontSize={'sm'} display="flex" alignItems="center" gap={2}>
                                <LiaGreaterThanSolid fontSize={'10px'} color='#00B4A6' /> Fleet & Technology
                            </Link>
                        </Flex>
                    </Box>

                    <Box width={{ base: '100%', sm: '45%', md: 'auto' }}>
                        <Heading fontFamily={'Syne'} mt={{ base: 0, md: 8 }} mb={4} fontSize={'lg'} color={"button"}>Legal</Heading>
                        <Flex direction="column" gap={3}>
                            <Link color={'gray'} _hover={{ color: 'button' }} href="#" fontSize={'sm'} display="flex" alignItems="center" gap={2}>
                                <LiaGreaterThanSolid fontSize={'10px'} color='#00B4A6' /> Privacy Policy
                            </Link>
                            <Link color={'gray'} _hover={{ color: 'button' }} href="#" fontSize={'sm'} display="flex" alignItems="center" gap={2}>
                                <LiaGreaterThanSolid fontSize={'10px'} color='#00B4A6' /> Cookie Notice
                            </Link>
                            <Link color={'gray'} _hover={{ color: 'button' }} href="#" fontSize={'sm'} display="flex" alignItems="center" gap={2}>
                                <LiaGreaterThanSolid fontSize={'10px'} color='#00B4A6' /> Terms of Use
                            </Link>
                        </Flex>
                    </Box>

                    <Box width={{ base: '100%', sm: '100%', md: 'auto' }}>
                        <Heading fontFamily={'Syne'} mt={{ base: 0, md: 8 }} mb={4} fontSize={'lg'} color={"button"}>Location</Heading>
                        <Flex direction="column" gap={3}>
                            <Link color={'gray'} _hover={{ color: 'button' }} href="#" fontSize={'sm'} display="flex" alignItems="start" gap={2}>
                                <MdAddLocationAlt fontSize={'16px'} color='#00B4A6' /> Lagos Island Corridor.<br /> Lagos, Nigeria.
                            </Link>
                            <Link color={'gray'} _hover={{ color: 'button' }} href="#" fontSize={'sm'} display="flex" alignItems="start" gap={2}>
                                <MdEmail fontSize={'16px'} color='#00B4A6' /> hello@espatch.com
                            </Link>
                        </Flex>
                    </Box>
                </Flex>

                <Box display={'flex'} my={10} justifyContent={{ base: 'center', md: 'flex-start' }}>
                    <Text color={'gray'} fontSize={'sm'} textAlign={{ base: 'center', md: 'left' }}>
                        © 2026 eSpatch Logistics Services Limited. All rights reserved.
                    </Text>
                </Box>
            </FooterMargin>
        </Box >
    )
}