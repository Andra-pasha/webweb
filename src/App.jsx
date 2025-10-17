import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jurusan from "./pages/Jurusan";
import Dokumentasi from "./pages/Testimoni";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="logo">SKAKUS</div>
        <ul className="nav-links">
          <li><NavLink to="/" end>Halaman Utama</NavLink></li>
          <li><NavLink to="/about">Tentang</NavLink></li>
          <li><NavLink to="/jurusan">Jurusan</NavLink></li>
          <li><NavLink to="/dokumentasi">Testimoni</NavLink></li>
          <li><NavLink to="/contact">Kontak</NavLink></li>
        </ul>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jurusan" element={<Jurusan />} />
          <Route path="/dokumentasi" element={<Dokumentasi />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
