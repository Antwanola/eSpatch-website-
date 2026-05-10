import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { MdGpsFixed } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaShieldAlt, FaLeaf, FaFileContract } from "react-icons/fa";
import BikeViewer from './MiniComponents/BikeViewer';
import React from 'react';

const ArrowForward = IoIosArrowRoundForward as React.ElementType;
const ShieldIcon = FaShieldAlt as React.ElementType;
const LeafIcon = FaLeaf as React.ElementType;
const ContractIcon = FaFileContract as React.ElementType;

interface Props { }

const Hero: React.FC<Props> = () => {

    const trustBadges = [
        { icon: <ShieldIcon size={13} />, label: 'Fully Insured' },
        { icon: <LeafIcon size={13} />, label: 'Zero Emissions' },
        { icon: <ContractIcon size={13} />, label: 'Single Contract' },
    ];

    return (
        <Flex
            as='section'
            position={'relative'}
            overflow={'hidden'}
            bg='#151c34ff'
            h={'auto'}
            justifyContent={'space-between'}
            p={{ base: 5, md: 10, lg: '30px' }}
            gap={{ base: 6, md: 10 }}
            flexDir={{ base: 'column', md: 'row' }}
        >
            <style>{`
                @keyframes blink-glow {
                    0%, 100% {
                        opacity: 1;
                        filter: drop-shadow(0 0 6px #01decb) drop-shadow(0 0 14px #01decb);
                    }
                    50% {
                        opacity: 0.1;
                        filter: none;
                    }
                }
                .gps-icon {
                    animation: blink-glow 1.2s ease-in-out infinite;
                    color: #01decb;
                    display: flex;
                    align-items: center;
                    flex-shrink: 0;
                }
                .hero-radial {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse 80% 60% at 65% 50%, rgba(0,222,203,0.13) 0%, rgba(0,180,166,0.06) 35%, transparent 70%);
                    pointer-events: none;
                    z-index: 0;
                }
            `}</style>

            <div className="hero-radial" />

            <Box
                position={'relative'}
                zIndex={1}
                maxW={{ base: '100%', md: '520px' }}
                w={{ base: '100%', md: '50%' }}
                mt={{ base: 6, md: 15 }}
            >
                <Flex
                    mb={6}
                    align={'center'}
                    display={'inline-flex'}
                    gap={2}
                    border={'0.5px solid'}
                    borderRadius={'20px'}
                    px={3} py={1}
                    fontSize={'xs'}
                    borderColor={'#01decb4c'}
                    bg={'#00867b4c'}
                    whiteSpace={'nowrap'}
                >
                    <span className="gps-icon">
                        <MdGpsFixed size={14} color='currentColor' />
                    </span>
                    <Box color={'text.green'} as={'span'} letterSpacing={'wider'} fontWeight={'medium'}>
                        FLEET-AS-A-SERVICE &nbsp;·&nbsp; LAGOS
                    </Box>
                </Flex>

                <Text
                    fontSize={{ base: '32px', md: '44px', lg: '56px' }}
                    letterSpacing={'tight'}
                    color={'white'}
                    fontWeight={'700'}
                    lineHeight={'1.07'}
                    mb={10}
                    mt={10}
                    fontFamily={'Syne'}
                >
                    Lagos Deliveries.{' '}
                    <Box color={'text.green'} as={'span'}>Fully Electric.</Box>{' '}
                    Fully Managed.
                </Text>

                <Text
                    color={'whiteAlpha.700'}
                    fontSize={{ base: 'md', md: 'lg' }}
                    lineHeight={'tall'}
                    letterSpacing={'wide'}
                    maxW={'420px'}
                >
                    eSpatch provides delivery platforms with a single B2B contract — professional riders, electric motorcycles, zero liability.
                </Text>

                <Flex gap={{ base: 4, md: 10 }} flexDir={{ base: 'column', sm: 'row' }}>
                    <Button as='button' className='btn' mt={10} bg={'button'} borderRadius={10} color={'bg'} size={'lg'}>
                        Partner with us <ArrowForward />
                    </Button>
                    <Button as='button' mt={10} borderRadius={10} bg={'transparent'} border={'0.5px solid'} borderColor={'text'} size={'lg'}>
                        Learn more <ArrowForward />
                    </Button>
                </Flex>

                <Flex
                    align={'center'}
                    mt={10}
                    gap={0}
                    flexWrap={'wrap'}
                    border={'0.5px solid'}
                    borderColor={'whiteAlpha.100'}
                    borderRadius={'12px'}
                    overflow={'hidden'}
                    bg={'whiteAlpha.50'}
                    w={'fit-content'}
                >
                    {trustBadges.map((item, i, arr) => (
                        <React.Fragment key={item.label}>
                            <Flex align={'center'} gap={2} px={{ base: 3, sm: 4 }} py={3} fontSize={{ base: 'xs', sm: 'sm' }}>
                                <Box as={'span'} color={'#01decb'} display={'flex'} alignItems={'center'}>
                                    {item.icon}
                                </Box>
                                <Box as={'span'} color={'gray.300'} fontWeight={'400'} whiteSpace={'nowrap'}>
                                    {item.label}
                                </Box>
                            </Flex>
                            {i < arr.length - 1 && (
                                <Box w={'0.5px'} alignSelf={'stretch'} bg={'whiteAlpha.200'} flexShrink={0} />
                            )}
                        </React.Fragment>
                    ))}
                </Flex>
            </Box>
            <Box position="relative" zIndex={1}>
                <BikeViewer src="/bike.png" autoRotate={true} />
            </Box>
        </Flex>
    );
};

export default Hero;