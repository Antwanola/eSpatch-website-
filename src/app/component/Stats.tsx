import { Box, Flex, Text } from '@chakra-ui/react';
import { PiMotorcycleFill } from "react-icons/pi";
import { FaBatteryFull } from "react-icons/fa";
import { MdOutlineBolt } from "react-icons/md";
import { TbClockHour4Filled } from "react-icons/tb";
import React from 'react';

interface Props { }

const Stats: React.FC<Props> = () => {
  return (
    <Flex
      as='section'
      w={'100%'}
      borderTop={'0.5px solid'}
      borderBottom={'0.5px solid'}
      borderColor={'whiteAlpha.200'}
      justifyContent={'center'}
      flexWrap={'wrap'}
      py={10}
      px={{ base: 4, md: 10, lg: 20 }}
      divideX={{ base: '0', md: '2px' }}
      divideColor="gray"
    >
      {[
        { value: '81', label: 'Electric Motocycles', sub: 'ACTIVE FLEET', icon: <PiMotorcycleFill /> },
        { value: '5', label: 'Battery Swap Stations', sub: 'ACROSS LAGOS', icon: <FaBatteryFull /> },
        { value: '10', label: 'Fast Charge Units', sub: 'FAST CHARGE', icon: <MdOutlineBolt /> },
        { value: '100%', label: 'Owned & Managed', sub: 'FULL CONTROL', icon: <TbClockHour4Filled />, },
      ].map((item) => (
        <Flex
          key={item.sub}
          direction='column'
          px={{ base: 6, md: 10 }}
          py={{ base: 6, md: 0 }}
          alignContent={'center'}
          w={{ base: '50%', md: 'auto' }}
          flex={{ md: 1 }}
        >
          <Box alignSelf={'center'} fontSize={'sm'} color={'button'} bgColor={'#00867b21'} p={2} borderRadius={'xl'} border={'1px ridge #00867b'}>
            {item.icon}
          </Box>
          <Box alignSelf={'center'} as={'header'} color={'button'} fontWeight={700} fontSize={{ base: '32px', md: '40px' }} fontFamily={'Syne'} lineHeight="1.1" my={1}>
            {item.value}
          </Box>
          <Text alignSelf={'center'} color={'gray.300'} textAlign={'center'} fontFamily="'DM Sans', sans-serif" fontSize="14px" fontWeight="500">
            {item.label}
          </Text>
          <Text alignSelf={'center'} color={'gray.500'} fontSize={'11px'} letterSpacing={'0.12em'} fontFamily="'DM Sans', sans-serif" fontWeight="600" mt={1}>
            {item.sub}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Stats;