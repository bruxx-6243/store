import { Routes, Route } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";
import Home from "./pages/Home";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
