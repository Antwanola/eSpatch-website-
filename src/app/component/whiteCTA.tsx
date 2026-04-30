import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

interface Props { }

const WhiteCTA: React.FC<Props> = () => {
  return (
    <Box bg={'white'} color={'black'}>
      <Flex
        px={{ base: 5, md: 12, lg: 20 }}
        py={{ base: 12, md: 16, lg: 20 }}
        direction={'column'}
        alignItems={'center'}
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
          <Box color={'text.green'} as={'span'} letterSpacing={'wider'} fontWeight={'medium'}>
            WHY ESPATCH ?
          </Box>
        </Flex>

        <Heading
          fontSize={{ base: '28px', md: '38px', lg: '50px' }}
          textAlign={'center'}
          lineHeight={'1.1'}
        >
          Built for platforms. Designed for scale
        </Heading>

        <Text
          py={10}
          fontSize={{ base: '16px', md: '18px', lg: '20px' }}
          textAlign={'center'}
          maxW={'560px'}
          color={'GrayText'}
        >
          One contract covers everything. we own the risk, you own the results
        </Text>
      </Flex>
    </Box>
  );
};

export default WhiteCTA;