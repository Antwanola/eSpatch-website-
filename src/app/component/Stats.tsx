import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {}

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
        { value: '81',   label: 'Electric Motocycles', sub: 'ACTIVE FLEET' },
        { value: '5',    label: 'Battery Swap Stations', sub: 'ACROSS LAGOS' },
        { value: '10',   label: 'Fast Charge Units', sub: 'FAST CHARGE' },
        { value: '100%', label: 'Owned & Managed', sub: 'FULL CONTROL' },
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
          <Box alignSelf={'center'} as={'header'} color={'button'} fontWeight={700} fontSize={'4xl'}>
            {item.value}
          </Box>
          <Text alignSelf={'center'} letterSpacing={0.5} color={'gray.400'} textAlign={'center'}>
            {item.label}
          </Text>
          <Text alignSelf={'center'} color={'Graytext'} fontSize={'xs'}>
            {item.sub}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Stats;