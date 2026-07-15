'use client'
import { Box, Heading, Text } from "@chakra-ui/react";
import MainMargin from "./component/MarginGuides/MianMargin";
import Hero from './component/Hero'
import Stats from './component/Stats'
import WhiteCTA from "./component/whiteCTA";
import Works from "./component/Works";
import Logistics from "./component/Logistics";
import ElectrifySection from "./component/ElectrifySection";
export default function Home() {
  return (
    <>
        <Hero />
      <MainMargin>
        <Stats />
      </MainMargin>
      <WhiteCTA />
      <Works />
      <Logistics />
      <ElectrifySection/>

    </>
  );
}
