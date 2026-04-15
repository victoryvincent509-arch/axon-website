import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
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
  return (
    <ThemeProvider>
      <BrowserRouter>
        <IntroAnimation />
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
      </BrowserRouter>
    </ThemeProvider>
  )
}
