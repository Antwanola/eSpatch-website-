import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import MainMargin from '../component/MarginGuides/MianMargin';

interface Props {}

const HowItWorks: React.FC<Props> = () => {
  return (
    <Box bg={'#152B43'} p={20}>
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
      <MainMargin>
      <Flex justifyContent={'space-between'} >
          <Box >
           {/* <div className="hero-radial" /> */}
          <Box>
      
            Enterprise Logistics Engine
          </Box>
        </Box>
        <Box>2</Box>
      </Flex>
      </MainMargin>
    </Box>
  );
};

export default HowItWorks;
