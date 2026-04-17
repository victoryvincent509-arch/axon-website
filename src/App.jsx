import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import ScrollToTop from './components/ScrollToTop'
import IntroAnimation from './components/IntroAnimation'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Products from './pages/Products'
import Collections from './pages/Collections'
import About from './pages/About'
import Stores from './pages/Stores'
import Contact from './pages/Contact'

export default function App() {
  // Logic to track if the intro is currently running
  // We check sessionStorage so the intro doesn't play every time you refresh
  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem('axon-intro-session') !== '1'
  })

  // This effect listens for when the intro is finished
  useEffect(() => {
    const handleIntroEnd = () => {
      if (sessionStorage.getItem('axon-intro-session') === '1') {
        setShowIntro(false)
      }
    }

    // Check every 100ms if the session key has been set by IntroAnimation.jsx
    const interval = setInterval(handleIntroEnd, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        
        {/* The Intro Component sits here */}
        <IntroAnimation />

        {/* CONDITIONAL RENDERING: 
          We hide the entire main-shell while showIntro is true. 
          This prevents the browser from anchoring to the footer on load.
        */}
        {!showIntro && (
          <div id="main-shell" className="flex min-h-screen flex-col bg-[var(--axon-bg)]">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route element={<PageTransition />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/collections" element={<Collections />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/stores" element={<Stores />} />
                  <Route path="/contact" element={<Contact />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </div>
        )}
      </BrowserRouter>
    </ThemeProvider>
  )
}