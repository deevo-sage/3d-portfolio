import React, { useState, useEffect } from "react";
import { Flex, Text, color } from "@chakra-ui/react";
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
const Section1 = () => {
  const [index, setIndex] = useState(0);
  const [typed, settyped] = useState(skillList[index]);
  const [mode, setmode] = useState<"inc" | "desc">("desc");
  const deleteIt = async () => {
    await timeout(100 + Math.random() * 200);
    const newtyped = typed.slice(0, typed.length - 1);
    settyped(newtyped);
  };
  const incIt = async () => {
    await timeout(100 + Math.random() * 200);
    const newtyped = skillList[index].slice(0, typed.length + 1);
    settyped(newtyped);
  };
  const typechanged = async () => {
    if (typed.length !== 0 && mode === "desc") {
      deleteIt();
    } else if (typed.length === 0 && mode === "desc") {
      if (index === skillList.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
      setmode("inc");
    }
    if (typed.length !== skillList[index].length && mode === "inc") {
      incIt();
    } else if (typed.length === skillList[index].length && mode === "inc") {
      await timeout(1500);
      setmode("desc");
    }
  };
  useEffect(() => {
    typechanged();
  }, [typed]);
  useEffect(() => {
    if (mode === "inc") {
      incIt();
    } else {
      deleteIt();
    }
  }, [mode]);
  useEffect(() => {
    deleteIt();
  }, []);

  return (
    <Flex
      bg="rgba(200,150,150,0.2)"
      w="100vw"
      maxW="100vw"
      overflowX="hidden"
      minH="100vh"
      pos="relative"
      zIndex={1}
      flexDir="column"
    >
      <Flex
        h=" 100vh"
        w="100vw"
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        paddingLeft="10%"
      >
        <Text
          color="yellow.400"
          bgGradient="linear(to-l,yellow.400,yellow.700)"
          bgClip="text"
          fontSize={["4xl", "5xl"]}
          fontWeight="700"
        >
          Sidharth Sahni
        </Text>
        <Text fontSize={["2xl", "3xl"]} color="whitesmoke">
          {typed}
          <span className="blinkcursor">|</span> Developer
        </Text>
      </Flex>

      {/* <Flex
        h=" 100vh"
        w="100vw"
        bg="rgba(255,255,255,1)"
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        paddingLeft="10%"
      ></Flex> */}
    </Flex>
  );
};
export default Section1;
