import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ChatbotWidget } from './components/ChatbotWidget';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Staff } from './pages/Staff';
import { Documents } from './pages/Documents';
import { Achievements } from './pages/Achievements';
import { Sport } from './pages/Sport';
import { Activities } from './pages/Activities';
import { Admissions } from './pages/Admissions';
import { Boarding } from './pages/Boarding';
import { Contact } from './pages/Contact';
import { StudentLogin } from './pages/StudentLogin';
import { StudentPortal } from './pages/StudentPortal';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/boarding" element={<Boarding />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/student" element={<StudentPortal />} />
          </Routes>
        </main>
        <Footer />
        <ChatbotWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;
