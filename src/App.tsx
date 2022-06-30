import React from "react";
import "./App.css";
import Canvasbase from "./component/monitor";
import { ChakraProvider } from "@chakra-ui/react";
import Content from "./component/content";
import "./index.scss";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Canvasbase />
        {/* <Content /> */}
        {/*  */}
      </div>
    </ChakraProvider>
  );
}

export default App;
