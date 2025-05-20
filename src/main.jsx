import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import HomePage from "./Pages/HomePage.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import FrozenPage from "./Pages/FrozenPage.jsx";
import FreshPage from "./Pages/FreshPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="frozen" element={<FrozenPage />} />
          <Route path="fresh" element={<FreshPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
