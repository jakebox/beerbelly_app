import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";


import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "./Gambarino/Gambarino.css";

const theme = createTheme({
  fontFamily: "Switzer, sans-serif",
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: { fontFamily: "Gambarino, sans-serif" },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);
