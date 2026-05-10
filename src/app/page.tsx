'use client'
import { Box, Heading, Text } from "@chakra-ui/react";
import MainMargin from "./component/MarginGuides/MianMargin";
import Hero from './component/Hero'
import Stats from './component/Stats'
import WhiteCTA from "./component/whiteCTA";
export default function Home() {
  return (
    <>
      <MainMargin>
        <Hero />
        <Stats />
      </MainMargin>
      <WhiteCTA />

    </>
  );
}
