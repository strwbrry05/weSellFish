import "./index.css";
import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import FrozenPage from "./Pages/FrozenPage.jsx";
import FreshPage from "./Pages/FreshPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import ScrollToTop from "./components/ScrollToTopOfPage.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="frozen" element={<FrozenPage />} />
          <Route path="fresh" element={<FreshPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
