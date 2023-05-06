import React from "react";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailPage from "./pages/CountryDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CountriesPage />} />
          <Route path={"/:countryId"} element={<CountryDetailPage />} />
        </Routes>
        {/* <CountriesPage /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
