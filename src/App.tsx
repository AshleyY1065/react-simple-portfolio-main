import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./helpers/scrollToTop";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
          <ScrollToTop />
          <Navigation />
          <Routes>
              {routes.map(route => <Route path={route.path} element={route.component} />)}
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
