import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ColorModeScript } from "@chakra-ui/react";
ReactDOM.render(
  <>
    <ColorModeScript initialColorMode="dark" />
    <App />
  </>,
  document.getElementById("root")
);
