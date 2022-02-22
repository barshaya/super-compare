import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ChooseProduct from "./pages/ChooseProduct/ChooseProduct";
import CompareResults from "./pages/CompareResults/CompareResults";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChooseProduct />} />
        <Route path="/compare" element={<CompareResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
