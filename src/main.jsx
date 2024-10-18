import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import ColorSwitcher from "./ColorSwitcher.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <ColorSwitcher />
      <App />
    </ChakraProvider>
  </StrictMode>
);

export const server = `https://api.coingecko.com/api/v3`;
