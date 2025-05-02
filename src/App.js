import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team.js';
import Career from './pages/Career';
import Pricing from './pages/Pricing';
import Login from './pages/Login.js';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer.js';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Career />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:email" element={<Dashboard />} />
          <Route path="/profile/:name" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
