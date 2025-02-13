import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Diagram from "./pages/Diagram";
import Charts from "./pages/Charts";
import { TeamProvider } from "./context/TeamContext";
import "./styles/GlobalStyles.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TeamProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/diagram" element={<Diagram />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </BrowserRouter>
    </TeamProvider>
  </React.StrictMode>
);
