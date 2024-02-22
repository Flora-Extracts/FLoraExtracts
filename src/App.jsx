import "./App.css";
import NavbarSec from "./components/NavbarSec";
import RunningMarquee from "./components/RunningMarque";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import HomeSec from "./pages/HomeSec";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-[#fdfde1]">
      {/* <Navbar /> */}
      <RunningMarquee />
      <NavbarSec />
      <Routes>
        <Route path="/" element={<HomeSec />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
