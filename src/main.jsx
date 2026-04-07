import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./Context/ContextProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey="pk_test_dmlhYmxlLXVyY2hpbi00OC5jbGVyay5hY2NvdW50cy5kZXYk">
    <BrowserRouter>
    <AuthProvider>    
        <App />
      </AuthProvider>
    </BrowserRouter>
  </ClerkProvider>
);
