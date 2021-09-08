import React, { useState, useEffect } from "react";
import { Flex, Text, IconButton, Button } from "@chakra-ui/react";
import { BiSquareRounded } from "react-icons/bi";
import { animated, useSpring } from "react-spring";
const projectlist = [{ heading: "Gatsby blog", body: "", link: "" }];

const Section2 = () => {
  return (
    <Flex
      bg="rgba(200,150,150,0.2)"
      w="100vw"
      maxW="100vw"
      overflowX="hidden"
      minH="300vh"
      pos="relative"
      zIndex={1}
      alignItems="flex-start"
      flexDir="column"
      paddingLeft="10%"
      paddingTop="5"
    >
      <Text
        fontSize={["4xl", "3xl"]}
        fontWeight="semibold"
        bgGradient="linear(to-l,yellow.400,yellow.700)"
        bgClip="text"
        mb={5}
      >
        My Projects
      </Text>

      {projectlist.map((project, index) => {
        return <ListEle {...project} key={index + JSON.stringify(project)} />;
      })}
    </Flex>
  );
};
export default Section2;
const ListEle: React.FunctionComponent<{
  heading: string;
  body: string;
  link: string;
}> = ({ heading, body, link }) => {
  const [open, setopen] = useState(false);
  const rotateprops = useSpring({
    transform: `rotate(${open ? 90 : 0}deg)`,
  });
  return (
    <Flex direction="column">
      <Flex
        direction="row"
        alignItems="center"
        onClick={() => {
          setopen(!open);
        }}
        cursor="pointer"
      >
        <animated.div
          style={{
            ...rotateprops,
            display: "grid",
            placeItems: "center",
          }}
        >
          <BiSquareRounded scale={open ? 1 : 2} />
        </animated.div>
        &nbsp;
        <Text fontSize="2xl">{heading}</Text>
      </Flex>
    </Flex>
  );
};
