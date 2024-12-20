import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthcontextProvider } from "./context/AuthContext.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthcontextProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </AuthcontextProvider>
    </BrowserRouter>
  </StrictMode>
);
