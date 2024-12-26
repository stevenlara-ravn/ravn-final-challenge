import AppLayout from "@/core/layout/AppLayout";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>
);
