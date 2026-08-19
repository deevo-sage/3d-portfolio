import React from "react";
import "./App.css";
import Canvasbase from "./component/monitor";
import { ChakraProvider } from "@chakra-ui/react";
import Content from "./component/content";
import IntelligenceTest from "./pages/IntelligenceTest";
import "./index.scss";

function App() {
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";

  if (pathname === "/intelligence-test") {
    return <IntelligenceTest />;
  }

  return (
    <ChakraProvider>
      <div className="App">
        <Canvasbase />
        <Content />
      </div>
    </ChakraProvider>
  );
}

export default App;
