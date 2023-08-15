import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="*" element={<Home />} exact />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
