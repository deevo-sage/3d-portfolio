import React, { useState, useEffect } from "react";
import { Flex, Text, color } from "@chakra-ui/react";
import Section1 from "../sections/section1";
import Section2 from "../sections/section2";
const skillList = [
  "Full-Stack",
  "React",
  "GraphQL",
  "MERN Stack",
  "React-Native",
  "Threejs",
];
function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const Content = () => {
  return (
    <Flex flexDir="column" color="whiteAlpha.800" >
      <Section1 />
      <Section2 />
    </Flex>
  );
};

export default Content;
