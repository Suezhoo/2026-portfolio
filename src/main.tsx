import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@fontsource/ntr/400.css";
import DefaultLayout from "./components/layout/DefaultLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DefaultLayout>
      <App />
    </DefaultLayout>
  </StrictMode>,
);
