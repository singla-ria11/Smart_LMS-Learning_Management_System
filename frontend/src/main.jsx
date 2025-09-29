import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// (Optional) Import Bootstrap JS (for components like modal, dropdowns, tooltips)
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Import icons
import "bootstrap-icons/font/bootstrap-icons.css";
import { AuthProvider } from "./context/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
