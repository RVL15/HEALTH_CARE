import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Chat from './pages/Chat.jsx'
import SymptomChecker from './pages/SymptomChecker.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  // Theme state: defaults to dark mode for premium aesthetics
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('medimind_theme') || 'dark';
  })

  // User Health Profile state
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('medimind_profile');
    return saved ? JSON.parse(saved) : {
      name: 'Alex Mercer',
      age: 28,
      gender: 'Non-binary',
      weight: 70, // kg
      height: 175, // cm
      waterTarget: 2500, // ml
      sleepTarget: 8, // hours
    };
  });

  // Sync theme with HTML class
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('medimind_theme', theme);
  }, [theme]);

  // Sync profile with localStorage
  useEffect(() => {
    localStorage.setItem('medimind_profile', JSON.stringify(profile));
  }, [profile]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const updateProfile = (updatedFields) => {
    setProfile(prev => ({ ...prev, ...updatedFields }));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        
        {/* Decorative ambient background glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] glow-primary rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute top-[20%] right-1/4 w-[400px] h-[400px] glow-accent rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute bottom-[10%] left-1/3 w-[600px] h-[600px] glow-primary rounded-full blur-[150px] pointer-events-none z-0"></div>

        <Navbar 
          theme={theme} 
          toggleTheme={toggleTheme} 
        />
        
        <main className="flex-grow z-10 relative">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/dashboard" 
              element={
                <Dashboard 
                  profile={profile} 
                  updateProfile={updateProfile} 
                />
              } 
            />
            <Route path="/chat" element={<Chat />} />
            <Route path="/symptoms" element={<SymptomChecker />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
