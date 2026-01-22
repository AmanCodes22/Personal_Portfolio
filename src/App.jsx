import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme === "dark" ? "dark-app" : "light-app"}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills theme={theme} />} />
              <Route path="/projects" element={<Projects theme={theme} />} />
              <Route path="/contact" element={<Contact theme={theme} />} />
       </Routes>




      <Footer theme={theme}></Footer>
    </div>
  );
}

export default App;

