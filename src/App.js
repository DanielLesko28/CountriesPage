import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailPage from "./pages/CountryDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountriesPage />} />
        <Route path="/country/:numericCode" element={<CountryDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
