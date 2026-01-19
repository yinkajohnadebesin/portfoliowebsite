import { Routes, Route } from "react-router-dom";
import NavbarYP from "./components/NavbarYP";
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <NavbarYP />
      <Routes>
        {/* <Route path="/" element={<Welcome />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/about-me" element={<AboutMe />} /> */}
      </Routes>
    </div>
  );
}

export default App;
